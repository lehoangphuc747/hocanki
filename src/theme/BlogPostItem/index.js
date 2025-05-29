import React from 'react';
import OriginalBlogPostItem from '@theme-original/BlogPostItem';
import SocialSharing from '@site/src/components/SocialSharing/SocialSharing';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function BlogPostItem(props) {
  const frontMatter = props?.frontMatter || {};
  const metadata = props?.metadata || {};

  const postTitle = frontMatter.title || 'Untitled Post';
  const permalink = metadata.permalink || '#';

  return (
    <>
      {/* Render the original blog post */}
      <OriginalBlogPostItem {...props} />

      {/* Add Social Sharing section */}
      <BrowserOnly>
        {() => {
          const pageUrl = `${window.location.origin}${permalink}`;
          return (
            <SocialSharing
              title="Chia sẻ bài viết với cộng đồng của bạn!"
              iconColor="var(--ifm-color-emphasis-800)"
              iconSize="1.8rem"
              pageUrl={pageUrl}
              postTitle={postTitle}
            />
          );
        }}
      </BrowserOnly>
    </>
  );
}
