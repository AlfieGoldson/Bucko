import styles from './ContactForm.module.scss';

export const ContactForm = (): JSX.Element => {
    return (
        <div id="contact" className={styles.contactForm}>
            <p className={styles.formTitle}>Un projet en tête?</p>
            <p className={styles.formSubtitle}>Parlez-en nous!</p>
            <form className={styles.form}>
                <label htmlFor="name" className={styles.formLabel}>
                    <span className={styles.labelText}>Name</span>
                    <input type="text" name="name" id="contact_name" />
                </label>
                <label htmlFor="email" className={styles.formLabel}>
                    <span className={styles.labelText}>Email</span>
                    <input type="text" name="email" id="contact_email" />
                </label>
                <label htmlFor="message" className={styles.formLabel}>
                    <span className={styles.labelText}>Tell us more...</span>
                    <textarea
                        name="message"
                        id="contact_msg"
                        rows={10}
                    ></textarea>
                </label>
            </form>
        </div>
    );
};
