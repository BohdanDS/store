import React, {FC, useState} from 'react';
import {Field, FieldAttributes, useFormikContext} from "formik";
import ImgCrop from "antd-img-crop";
import {Upload} from "antd";

type Props = {
    name: string,
    label: string

}

const ImageUploader: FC<Props> = ({name, label}) => {

    const {setFieldValue} = useFormikContext()


    const [fileList, setFileList] = useState<any>([]);

    const onChange = ({fileList: newFileList}: any) => {
        setFileList(newFileList);
        setFieldValue(name, newFileList)
    };


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
                                // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                listType="picture-card"
                                fileList={fileList}
                                onChange={onChange}
                                onPreview={onPreview}
                                name={name}
                                id={name}
                            >
                                {fileList.length < 5 && '+ Upload'}
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