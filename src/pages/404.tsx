import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';

// TODO: Remove @ts-ignore
// @ts-ignore
import PageNotFoundVideo from '../../assets/images/page-not-found.mp4';
import { SiteMetadata } from '../types/SiteMetadata';
import Layout from '../components/Layout';
import Title from '../components/mdx/Title';

const PageContent = styled.div`
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const RandomVideo = styled.video`
    width: 800px;
    max-width: 100%;
    padding: 0 20px;
    height: auto;
    margin: auto;
    display: block;
`;

type PageNotFoundProps = {
    data: {
        site: {
            siteMetadata: SiteMetadata;
        };
    };
};

export const PageNotFound = ({ data: { site } }: PageNotFoundProps) => (
    <Layout site={site}>
        <PageContent>
            <Title>Page Not Found</Title>
        </PageContent>
        <RandomVideo src={PageNotFoundVideo} autoPlay={true} loop={true} />
    </Layout>
);

export default PageNotFound;

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
                description
                author
                siteUrl
            }
        }
    }
`;
