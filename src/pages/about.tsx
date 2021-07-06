import { AboutProfile } from '@components/AboutProfile';
import { Content } from '@components/Content';
import { Layout } from '@components/Layout';
import { fetchAboutContent } from '@lib/api';
import { ITeamMember } from '@lib/api/types';
import { GetStaticProps } from 'next';
import Head from 'next/head';

interface Props {
    members: ITeamMember[];
}

export default function AboutPage({ members }: Props): JSX.Element {
    return (
        <Layout>
            <Head>
                <title>À Propos • Bucko</title>
            </Head>
            <Content>
                <h2>Notre Équipe.</h2>
                {members.map((member, i) => (
                    <AboutProfile {...member} key={i} />
                ))}
            </Content>
        </Layout>
    );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
    try {
        const aboutContent = await fetchAboutContent();

        return {
            props: {
                ...aboutContent,
            },
            revalidate: 60,
        };
    } catch (e) {
        throw e;
    }
};
