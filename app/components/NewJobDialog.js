import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from "./NewJobDialog.module.css";

export default function NewJobDialog({ onClose }) {
    const router = useRouter();
    const [title, setTitle] = useState('');
    const [selectedChannels, setSelectedChannels] = useState([]);
    
    // Function to handle title input change
    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    // Function to handle channel selection
    const handleChannelChange = (event) => {
        const channel = event.target.value;
        if (selectedChannels.includes(channel)) {
            setSelectedChannels(selectedChannels.filter(ch => ch !== channel));
        } else {
            setSelectedChannels([...selectedChannels, channel]);
        }
    };

    // Function to handle "Create new job" button click
    const handleCreateJob = () => {
        // Check if title has 5 or more characters and at least one channel is selected
        if (title.length >= 5 && selectedChannels.length > 0) {
            // Perform action to create new job
            // For demonstration purposes, you can just log the details
            console.log("Creating new job with title:", title);
            console.log("Selected channels:", selectedChannels);
            // Navigate to '/jobs/1'
            router.push('/jobs/1');
        } else {
            alert("Please enter a title with 5 or more characters and select at least one channel.");
        }
    };

    // Function to handle cancel button click
    const handleCancel = () => {
        onClose();
    };

    return (
        <div className={styles.modal_overlay}>
            <div className={styles.modal_content}>
                <h2>Create a new publishing job</h2>
                <div className={styles.title_entry}>
                <label htmlFor="title">Title: </label><br />
                <input 
                    type="text" 
                    id="title" 
                    value={title} 
                    onChange={handleTitleChange} 
                />
                </div>
                <div className={styles.selection_instruction}>Select your channels. You can add more later.</div>
                <div className={styles.channel_container}>
                <div>
                    <input 
                        type="checkbox" 
                        id="AboutUS" 
                        value="AboutUs" 
                        checked={selectedChannels.includes('AboutUs')} 
                        onChange={handleChannelChange} 
                    />
                    <label htmlFor="AboutUS"> About Us</label>
                </div>
                <div>
                    <input 
                        type="checkbox" 
                        id="XYZers.com" 
                        value="XYZers.com" 
                        checked={selectedChannels.includes('XYZers.com')} 
                        onChange={handleChannelChange} 
                    />
                    <label htmlFor="XYZers.com"> XYZers.com</label>
                </div>
                <div>
                    <input 
                        type="checkbox" 
                        id="Email" 
                        value="Email" 
                        checked={selectedChannels.includes('Email')} 
                        onChange={handleChannelChange} 
                    />
                    <label htmlFor="Email"> Email</label>
                </div>
                <div>
                    <input 
                        type="checkbox" 
                        id="DigDisplays" 
                        value="DigDisplays" 
                        checked={selectedChannels.includes('DigDisplays')} 
                        onChange={handleChannelChange} 
                    />
                    <label htmlFor="DigDisplays"> Digital Displays</label>
                </div>
                </div>
                <div className={styles.button_container}>
                    <button onClick={handleCancel}>Cancel</button>
                    <button onClick={handleCreateJob}>Create New Job</button>
                </div>
                
            </div>
        </div>
    );
}
