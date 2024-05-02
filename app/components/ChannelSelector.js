import { useState } from 'react';
import styles from './ChannelSelector.module.css';

export default function ChannelSelector() {
    const [selectedChannels, setSelectedChannels] = useState([]);

    const handleTabClick = (channel) => {
        // Toggle the selected state of the channel
        if (selectedChannels.includes(channel)) {
            setSelectedChannels(selectedChannels.filter(ch => ch !== channel));
        } else {
            setSelectedChannels([...selectedChannels, channel]);
        }
    };

    return (
        <div className={styles.container}>
            <div
                className={`${styles.tab} ${selectedChannels.includes('AboutUs') ? styles.on : styles.off}`}
                onClick={() => handleTabClick('AboutUs')}
            >
                About us
            </div>
            <div
                className={`${styles.tab} ${selectedChannels.includes('XYZers.com') ? styles.on : styles.off}`}
                onClick={() => handleTabClick('XYZers.com')}
            >
                XYZers.com
            </div>
            <div
                className={`${styles.tab} ${selectedChannels.includes('Email') ? styles.on : styles.off}`}
                onClick={() => handleTabClick('Email')}
            >
                Email
            </div>
            <div
                className={`${styles.tab} ${selectedChannels.includes('DigitalDisplays') ? styles.on : styles.off}`}
                onClick={() => handleTabClick('DigitalDisplays')}
            >
                Digital displays
            </div>
        </div>
    );
}
