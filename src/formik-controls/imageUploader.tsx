import React, {FC, useState} from 'react';
import {Field, FieldAttributes, useFormikContext} from "formik";
import ImgCrop from "antd-img-crop";
import {Upload} from "antd";
import {getBase64} from "../models/common";

type Props = {
    name: string,
    label: string

}

const ImageUploader: FC<Props> = ({name, label}) => {

    const {setFieldValue} = useFormikContext()


    const [fileList, setFileList] = useState<any>([]);

    const validateUpload = (_file: File) => {
        return false
    }

    const uploadImage = async ({fileList: newFileList}: any) => {
        setFileList(newFileList)
        if (newFileList.length === 0) return
        const newFile = newFileList[newFileList.length - 1]
        try {
            const type = newFile.type.split('/')[0]
            if (type !== 'image') {
                // put(NotificationOpen('error', 'Ошибка', 'File is not an image'))
                return
            }
        } catch (_error) {
            return false
        }
        getBase64(newFile.originFileObj, (imageUrl: any) => {
            setFieldValue(name, imageUrl)
        })
    }


    const onPreview = async (file: any) => {
        let src = file.url;
        if (!src) {
            src = await new Promise(resolve => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj);
                reader.onload = () => resolve(reader.result);
            });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow && imgWindow.document.write(image.outerHTML);
    };


    return (
        <Field id={name} name={name}>
            {(el: FieldAttributes<any>) => {
                return (
                    <>
                        <label htmlFor={name}>{label}:</label>
                        <ImgCrop rotate>
                            <Upload
                                listType="picture-card"
                                fileList={fileList}
                                onChange={uploadImage}
                                beforeUpload={validateUpload}
                                onPreview={onPreview}
                                name={name}
                                id={name}
                            >
                                {fileList.length < 1 && '+ Upload'}
                            </Upload>
                        </ImgCrop>
                    </>
                )
            }
            }
        </Field>
    );
};

export default ImageUploader;