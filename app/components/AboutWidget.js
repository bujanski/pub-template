"use client";

// imgbb key: da740b76edc4dda0ff1cf8b5fa367eb6

import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import styles from "./AboutWidget.module.css";
import { appInitialData } from "@/app/appContext";
import AboutTags from "./AboutTags";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const fileTypes = ["JPEG", "JPG", "PNG", "GIF"];

export default function AboutWidget() {
    const [title, setTitle] = useState("");
    const [teaser, setTeaser] = useState("");
    const [copy, setCopy] = useState("");
    const [file, setFile] = useState(null);
    const [showTooltip1, setShowTooltip1] = useState(false); // State to track tooltip visibility
    const [showTooltip2, setShowTooltip2] = useState(false);
    const handleChange = (file) => {
        setFile(file);
    };

    const { toolbarOptions } = appInitialData;
    const toolbar_module = { toolbar: toolbarOptions };
    const logCopy = () => {
        console.log(title, teaser, copy);
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
            <div className={styles.quill}>
                <ReactQuill
                    theme="snow"
                    placeholder="Add copy here"
                    modules={toolbar_module}
                    value={copy}
                    onChange={setCopy}
                />
            </div>
            <hr />
            <div className={styles.editor_label}>File upload</div>
            <div className={styles.upload_section}>
                <div className={styles.upload_subsection}>
                    <div className={styles.editor_label}>Images</div>
                    <div className={styles.file_drop}>
                        <div className={styles.upload_widget}>
                            <FileUploader
                                multiple={true}
                                handleChange={handleChange}
                                name="file"
                                types={fileTypes}
                            />
                            <p>
                                {file && file.length > 0
                                    ? `File name: ${file[0].name}`
                                    : "No files uploaded yet"}
                            </p>
                            {file && file.length > 0 && (
                                <div style={{ width: 200, height: 200 }}>
                                    <img
                                        src={URL.createObjectURL(file[0])}
                                        alt="Uploaded file"
                                        style={{
                                            maxWidth: "100%",
                                            maxHeight: "100%",
                                        }}
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className={styles.upload_subsection}>
                    <div className={styles.editor_label}>Additional files</div>
                    <div className={styles.file_drop}>
                        <div className={styles.upload_widget}>
                            <FileUploader
                                multiple={true}
                                handleChange={handleChange}
                                name="file"
                                types={fileTypes}
                            />
                            <p>
                                {file && file.length > 0
                                    ? `File name: ${file[0].name}`
                                    : "No files uploaded yet"}
                            </p>
                            {file && file.length > 0 && (
                                <div style={{ width: 200, height: 200 }}>
                                    <img
                                        src={URL.createObjectURL(file[0])}
                                        alt="Uploaded file"
                                        style={{
                                            maxWidth: "100%",
                                            maxHeight: "100%",
                                        }}
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                
            </div>Main image alt text<input
                    type="text"
                    id="alt-text"
                    className={styles.editor_input}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            <hr />
            <div className={styles.editor_label}>Tags</div>
            <div className={styles.tag_container}>
                <AboutTags />
            </div>
            <hr />
            <div className={styles.editor_label}>Options</div>
                <div>Include Retirees, site location dropdown, languages, meta description, expiration date,</div>
            <button onClick={logCopy}>log it</button>
        </div>
    );
}
