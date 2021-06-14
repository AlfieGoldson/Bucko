import styles from './ContactForm.module.scss';

export function ContactForm() {
	return (
		<div id='contact' className={styles.contactForm}>
			<h2 className={styles.formTitle}>Have A Project?</h2>
			<h3 className={styles.formSubtitle}>Let's Talk.</h3>
			<form className={styles.form}>
				<div className={styles.userInfo}>
					<label htmlFor='name' className={styles.formLabel}>
						<span className={styles.labelText}>Name</span>
						<input type='text' name='name' id='contact_name' />
					</label>
					<label htmlFor='email' className={styles.formLabel}>
						<span className={styles.labelText}>Email</span>
						<input type='text' name='email' id='contact_email' />
					</label>
				</div>
				<label htmlFor='message' className={styles.formLabel}>
					<span className={styles.labelText}>Tell us more...</span>
					<textarea
						name='message'
						id='contact_msg'
						rows={10}
					></textarea>
				</label>
			</form>
		</div>
	);
}
