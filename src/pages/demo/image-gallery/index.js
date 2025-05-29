
import React from 'react';
import Layout from '@theme/Layout'; // Import Layout component from Docusaurus
import ImageGallery from '@site/src/components/ModernDesign/ImageGallery/ImageGallery'; // Import your ImageGallery component
import styles from './imageGalleryDemo.module.css'; // Import custom CSS (create this file if you want extra styling)

// PHẦN KHAI BÁO DỮ LIỆU -----------------

const images = [
  {
    src: 'https://images.unsplash.com/photo-1528721071427-cab7de8e8050?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Hành trình của chúng tôi',
    title: 'Hành trình khám phá của chúng tôi',
    description: 'Khám phá những miền đất mới, gặp gỡ những con người thú vị.',
    link: '/family-therapy',
  },
  {
    src: 'https://images.unsplash.com/photo-1512764161209-b11083080ce5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Group Counseling',
    title: 'Group Counseling',
    description: 'Building connections and sharing experiences.',
    link: '/group-counseling',
  },
  {
    src: 'https://images.unsplash.com/photo-1485831852498-9db4e9338ce6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Emotional Support',
    title: 'Emotional Support',
    description: 'Providing care and understanding in difficult times.',
    link: '/emotional-support',
  },
  {
    src: 'https://images.unsplash.com/photo-1528721071427-cab7de8e8050?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Family Therapy',
    title: 'Family Therapy',
    description: 'Supporting families through meaningful conversations.',
    link: '/family-therapy',
  },
  {
    src: 'https://images.unsplash.com/photo-1686180381147-d378da192cc0?q=80&w=1952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Group Counseling',
    title: 'Group Counseling',
    description: 'Building connections and sharing experiences.',
    link: '/group-counseling',
  },
  {
    src: 'https://images.unsplash.com/photo-1523748889156-ad499aad0d69?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Emotional Support',
    title: 'Emotional Support',
    description: 'Providing care and understanding in difficult times.',
    link: '/emotional-support',
  },
];

// PHẦN CHÈN CÁC THẺ HIỂN THỊ NỘI DUNG -----------------

function ImageGalleryDemo() {
  return (
    <Layout title="Image Gallery Demo" description="A demo page showcasing the Image Gallery component">
      <div className={styles.demoContainer}>

        {/* Render the ImageGallery component with custom props */}
        <ImageGallery
          title="Hành trình của chúng tôi"
          description="Khám phá những miền đất mới, gặp gỡ những con người thú vị."
          images={images}
          lightboxLinkText="Tham gia ngay!"
          titleColor="#2f4f4f"          // Adaptive title color for light mode
          descriptionColor="#555555"     // Adaptive description color for light mode
          textColor="#FFFFFF"            // Lightbox text color
          linkColor="#FF6F61"            // Lightbox link color
          linkHoverColor="#FFFFFF"       // Hover color for link
        />

      </div>
    </Layout>
  );
}

export default ImageGalleryDemo;
