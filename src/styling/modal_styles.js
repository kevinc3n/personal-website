export const modalContainer = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70%',
    maxWidth: '800px',
    bgcolor: '#fffdf0',
    p: 4,
    borderRadius: 4,
    border: '3.5px solid #000',
    boxShadow: '0 8px 0px rgba(0, 0, 0, 1)',
    display: 'flex',
    flexDirection: 'column',
    '& .slick-prev, & .slick-next': {
    zIndex: 1,
    color: '#000',
    backgroundColor: 'transparent',
    border: 'none',
    width: '30px',
    height: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    },
    '& .slick-prev:hover, & .slick-next:hover': {
    color: '#808080',
    backgroundColor: 'transparent',
    },
    '& .slick-prev:before, & .slick-next:before': {
    fontSize: '30px',
    color: 'inherit',
    },
    '& .slick-dots': {
    marginTop: '30px',
    },
};

export const closeButton = {
    fontSize: 30,
}

export const iconButton = {
    alignSelf: 'flex-end',
    color: 'black',
}

export const settings = {
    dots: true,
    infinite: true,
    speed: 450,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: true,
};