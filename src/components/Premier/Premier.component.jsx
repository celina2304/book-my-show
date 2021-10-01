import React from 'react'
import Slider from 'react-slick';

// components
import Poster from '../Poster/poster.component';

const Premier = () => {
    const settings = {
        infinite: false,
        autoplay: false,
        slidesToShow: 5,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
            {
                breakpoints: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                },
            },
            {
                breakpoints: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
            {
                breakpoints: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const PremierImages = [
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00312453-xagwksucfv-portrait.jpg",
            alt: "undercover",
            title: "undercover",
            subtitle: "english",
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00312453-xagwksucfv-portrait.jpg",
            alt: "undercover",
            title: "undercover",
            subtitle: "english",
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00312453-xagwksucfv-portrait.jpg",
            alt: "undercover",
            title: "undercover",
            subtitle: "english",
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00312453-xagwksucfv-portrait.jpg",
            alt: "undercover",
            title: "undercover",
            subtitle: "english",
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00312453-xagwksucfv-portrait.jpg",
            alt: "undercover",
            title: "undercover",
            subtitle: "english",
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00312453-xagwksucfv-portrait.jpg",
            alt: "undercover",
            title: "undercover",
            subtitle: "english",
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00312453-xagwksucfv-portrait.jpg",
            alt: "undercover",
            title: "undercover",
            subtitle: "english",
        },
    ]
    return <>
        <Slider {...settings}>
            {PremierImages.map((image) => (
                <Poster {...image} />
            ))}
        </Slider>
    </>
};

export default Premier;