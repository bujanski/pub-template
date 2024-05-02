"use client";
import { useState } from "react";
import { appInitialData } from "@/app/appContext";
import styles from "./AboutTags.module.css";

export default function AboutTags() {
    const { aboutTags } = appInitialData;

    const [selectedTags, setSelectedTags] = useState([]);

    const handleTagSelection = (event) => {
        const selectedTag = event.target.value;
        // Check if the selected tag is at least 2 characters long and not already selected
        if (selectedTag.length >= 2 && !selectedTags.includes(selectedTag)) {
            setSelectedTags([...selectedTags, selectedTag]);
        }
    };

    const removeTag = (tagToRemove) => {
        setSelectedTags(selectedTags.filter((tag) => tag !== tagToRemove));
    };

    const tagOptions = aboutTags.map((tag, index) => (
        <option key={index} value={tag}>
            {tag}
        </option>
    ));

    const selectedTagsDisplay = selectedTags.map((tag, index) => (
        <div className={styles.sel_tag} key={index}>
            <button onClick={() => removeTag(tag)}>x</button>
            {tag}
        </div>
    ));

    return (
        <div id={styles.container}>
            <div className={styles.dropdown}>
            <div className={styles.tags_label}>Select Tags:</div>
                <select onChange={handleTagSelection}>
                    <option value="">Select tags</option>
                    {tagOptions}
                </select>
            </div>
            <div className={styles.sel_tags_container}>
                <div className={styles.tags_label}>Selected Tags:</div>
                <div className={styles.sel_tags_box}>
                    {selectedTagsDisplay}
                </div>
            </div>
        </div>
    );
}
