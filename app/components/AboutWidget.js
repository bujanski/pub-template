"use client";

// imgbb key: da740b76edc4dda0ff1cf8b5fa367eb6
import { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import styles from "./AboutWidget.module.css";
import { appInitialData } from "@/app/appContext";
import AboutTags from "./AboutTags";
import { Dropzone, FileInputButton, FileMosaic, FileCard } from "@files-ui/react";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function AboutWidget() {
    const [title, setTitle] = useState("");
    const [teaser, setTeaser] = useState("");
    const [copy, setCopy] = useState("");
    const [docFiles, setDocFiles] = useState([]);
    const [imgFiles, setImgFiles] = useState([]);
    const [altText, setAltText] = useState("");
    const [otherFiles, setOtherFiles] = useState([]);


    const handleDocChange = (files) => {
        setDocFiles(files);
    };

    const handleImgChange = (files) => {
        setImgFiles(files);
    };

    const handleOtherChange = (files) => {
        setOtherFiles(files);
    };

    const { toolbarOptions } = appInitialData;
    const toolbar_module = { toolbar: toolbarOptions };
    const logCopy = () => {
        console.log(title, teaser, copy, imgFiles);
    };

    return (
        <div id={styles.container}>
            <div id={styles.job_number}>Job #1234</div>
            <div id={styles.title_editor}>
                <div className={styles.editor_label}>Title</div>
                <input
                    type="text"
                    id="title"
                    className={styles.editor_input}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div id={styles.teaser_editor}>
                <div className={styles.editor_label}>Teaser</div>
                <input
                    type="text"
                    id="teaser"
                    className={styles.editor_input}
                    value={teaser}
                    onChange={(e) => setTeaser(e.target.value)}
                />
            </div>
            <hr />
            <div className={styles.editor_label}>Copy</div>
            <div className={styles.notes}>Add/edit your copy in the editor or upload a document below</div>
            <div className={styles.quill}>
                <ReactQuill
                    theme="snow"
                    placeholder="Add copy here"
                    modules={toolbar_module}
                    value={copy}
                    onChange={setCopy}
                />
            </div>
            <div className={styles.upload_section}>
                <div className={styles.upload_subsection}>
                    <div className={styles.editor_sm_label}>Upload a document</div>
                    <div className={styles.file_drop}>
                        <FileInputButton
                            onChange={handleDocChange}
                            value={docFiles}
                            accept=".doc, .docx, .rtf"
                            maxFileSize={10 * 1024 * 1024}
                        >
                            {docFiles.map((file, index) => (
                                <FileCard key={file.id} {...file} info />
                            ))}
                        </FileInputButton>
                    </div>
                    </div>
                    </div>
            <hr />
            <div className={styles.editor_label}>File upload</div>
            <div className={styles.upload_section}>
                <div className={styles.upload_subsection}>
                    <div className={styles.editor_sm_label}>Images</div>
                    <div className={styles.file_drop}>
                        <Dropzone
                            onChange={handleImgChange}
                            value={imgFiles}
                            accept="image/*"
                            maxFileSize={10 * 1024 * 1024}
                        >
                            {imgFiles.map((file, index) => (
                                <FileMosaic {...file} preview key={index} />
                            ))}
                        </Dropzone>
                    </div>
                    <div className={styles.alt_text_container}>
                        <div className={styles.editor_sm_label}>
                            Main image alt text*
                        </div>

                        <input
                            type="text"
                            id="alt-text"
                            className={styles.editor_input}
                            value={title}
                            onChange={(e) => setAltText(e.target.value)}
                        />
                    </div>
                    <p className={styles.notes}>
                        *Add alt text for additional images in the notes section
                        below
                    </p>
                </div>

                <div className={styles.upload_subsection}>
                    <div className={styles.editor_sm_label}>
                        Additional files
                    </div>
                    <div className={styles.file_drop}>
                        <Dropzone
                            onChange={handleOtherChange}
                            value={otherFiles}
                        >
                            {otherFiles.map((file, index) => (
                                <FileMosaic {...file} preview key={index} />
                            ))}
                        </Dropzone>
                    </div>
                </div>
            </div>

            <hr />
            <div className={styles.editor_label}>Metadata</div>
            <div className={`${styles.editor_sm_label} ${styles.meta_label}`}>
                Tags
            </div>
            <div className={styles.tag_container}>
                <AboutTags />
            </div>
            <div className={`${styles.editor_sm_label} ${styles.meta_label}`}>
                Description
            </div>

            <hr />
            <div className={styles.editor_label}>Options</div>
            <div>
                site location dropdown, meta description, expiration date,
            </div>
            <button onClick={logCopy}>log it</button>
        </div>
    );
}
