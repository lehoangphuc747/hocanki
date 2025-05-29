import React from 'react';
import {HtmlClassNameProvider} from '@docusaurus/theme-common';
import {DocProvider} from '@docusaurus/plugin-content-docs/client';
import DocItemMetadata from '@theme/DocItem/Metadata';
import DocItemLayout from '@theme/DocItem/Layout';
import SocialSharing from '@site/src/components/SocialSharing/SocialSharing';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function DocItem(props) {
  const {content} = props;
  const {metadata} = content;
  const docHtmlClassName = `docs-doc-id-${metadata.id}`;
  const MDXComponent = content;

  // Get metadata information for SocialSharing
  const docTitle = metadata?.title || 'Untitled Doc';
  const permalink = metadata?.permalink || '#';

  return (
    <DocProvider content={content}>
      <HtmlClassNameProvider className={docHtmlClassName}>
        <DocItemMetadata />
        <DocItemLayout>
          {/* Render the main content */}
          <MDXComponent />

          {/* Place the SocialSharing component after the tags */}
          <BrowserOnly>
            {() => {
              const pageUrl = `${window.location.origin}${permalink}`;
              return (
                <div style={{ marginTop: '1.5rem' }}>
                  <SocialSharing
                    title="Chia sẻ bài viết với cộng đồng của bạn!"
                    iconColor="var(--ifm-color-emphasis-800)"
                    iconSize="1.8rem"
                    pageUrl={pageUrl}
                    postTitle={docTitle}
                  />
                </div>
              );
            }}
          </BrowserOnly>
        </DocItemLayout>
      </HtmlClassNameProvider>
    </DocProvider>
  );
}
