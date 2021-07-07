import { ContactForm } from '@components/ContactForm';
import { Content } from '@components/Content';
import { Layout } from '@components/Layout';
import styles from '@styles/pages/ContactPage.module.scss';
import Head from 'next/head';
import React from 'react';

export default function ContactPage(): JSX.Element {
    return (
        <Layout>
            <Head>
                <title>À Propos • Bucko</title>
            </Head>
            <div className={styles.container}>
                <Content>
                    <ContactForm />
                </Content>
            </div>
        </Layout>
    );
}
