"use client";

// imgbb key: da740b76edc4dda0ff1cf8b5fa367eb6

import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import styles from "./AboutWidget.module.css";
import { appInitialData } from "@/app/appContext";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const fileTypes = ["JPEG", "JPG", "PNG", "GIF"];

export default function AboutWidget() {
    const [title, setTitle] = useState("");
    const [teaser, setTeaser] = useState("");
    const [copy, setCopy] = useState("");
    const [file, setFile] = useState(null);
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

            <div className={styles.editor_label}>Images</div>
            <div className={styles.image_label}>1440x752</div>
            <div className={styles.upload_container}>
                <FileUploader
                    multiple={false}
                    handleChange={handleChange}
                    name="file"
                    types={fileTypes}
                />
                <p>
                    {file && file.length > 0
                        ? `File name: ${file[0].name}`
                        : "No file uploaded yet"}
                </p>
            </div>
            <div className={styles.image_label}>1023x960</div>
            <div className={styles.upload_container}>
                <FileUploader
                    multiple={false}
                    handleChange={handleChange}
                    name="file"
                    types={fileTypes}
                />
                <p>
                    {file && file.length > 0
                        ? `File name: ${file[0].name}`
                        : "No file uploaded yet"}
                </p>

            </div>
            <button onClick={logCopy}>log it</button>
        </div>
    );
}
