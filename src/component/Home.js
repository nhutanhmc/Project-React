import React from "react";
import '../css/Home.css';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import { Box, Typography } from "@mui/material";
import CarRentalTwoToneIcon from '@mui/icons-material/CarRentalTwoTone';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';


export default function Home() {

    const images = [
        {
            original: 'https://static.danhgiaxe.com/data/201525/the-aventadors-aggressive-lines-and-stealth-fighter-like-edges-make-for-a-menacing-beauty-thats-perfect-for-lambos-attention-hoarding-ethos_2324.jpg',

        },
        {
            original: 'https://vnn-imgs-f.vgcloud.vn/2020/10/21/10/huracan-la-mo-t-trong-nhu-ng-ma-u-xe-de-p-nha-t-cu-a-lamborghini-a-nh-autocar.jpg',

        },
        {
            original: 'https://autobikes.vn/stores/news_dataimages/minhmax/072016/23/22/223933_2.jpg',

        },
        {
            original: 'https://afamilycdn.com/2018/7/2/du-lich-tren-xe-1-1530505914263914495450.jpg',

        },
        {
            original: 'https://cdnimg.vietnamplus.vn/t1200/Uploaded/qrndqxjwp/2022_01_25/960x016175894187251632579825.jpg',

        },
        {
            original: 'https://cdnimg.vietnamplus.vn/uploaded/qrndqxjwp/2022_01_15/5c13378d057c480a8e98c64a413e20613682161636517973.jpg',

        }
    ];

    return (
        <div className="home-container">

            {/* phần header của trang */}
            <Typography variant="h2" sx={{ color: '#E7B10A', paddingTop: '8rem', textAlign: 'center' }}>Self Driving Car</Typography>
            <CarRentalTwoToneIcon sx={{ fontSize: '70px', paddingLeft: '56rem', color: '#D8D8D8'}} />
            <ImageGallery items={images} showNav={false} showFullscreenButton={false} slideDuration={300} />

            {/* phần body của trang */}
            <div className="body">
                <Box sx={{ width: '25rem', height: '20rem', backgroundColor: '#D8D8D8' }} className="description1">
                    <ThumbUpOutlinedIcon sx={{ fontSize: '100px', color: '#20262E', paddingLeft: '9rem' }} /><Typography sx={{ color: "skyblue", fontSize: '35px', textAlign: 'center' }}>Best price</Typography>
                    <Typography sx={{ textAlign: "center" }}>Chào mừng đến với chỗ tôi! Chúng tôi tự hào là nơi cung cấp các sản phẩm với giá cả tốt nhất trên thị trường. Tại đây, bạn sẽ tìm thấy những sản phẩm chất lượng với mức giá hấp dẫn nhất, đảm bảo sự hài lòng và tiết kiệm chi phí cho bạn. Hãy trải nghiệm các sản phẩm của chúng tôi và cảm nhận sự khác biệt!</Typography>
                </Box>
                <Box sx={{ width: '25rem', height: '20rem', backgroundColor: '#D8D8D8' }} className="discription2">
                    <WorkOutlineOutlinedIcon sx={{ fontSize: '100px', color: '#20262E', paddingLeft: '9rem' }} /><Typography sx={{ color: "skyblue", fontSize: '35px', textAlign: 'center' }}>Package Delivery</Typography>
                    <Typography sx={{ textAlign: 'center' }}>Chúng tôi tự hào giới thiệu dịch vụ giao và gói hàng của chúng tôi, được đánh giá cao nhất và tuyệt vời nhất trong ngành. Với một đội ngũ nhân viên chuyên nghiệp và nhiều kinh nghiệm, chúng tôi cam kết mang đến cho bạn trải nghiệm giao hàng an toàn, nhanh chóng và chính xác nhất.</Typography>
                </Box>
            </div>
            <Typography className="header2" variant="h3" sx={{ textAlign: 'center', background: '#E7B10A', paddingTop: '50px', color: 'white' }}>★ SERVICE ★</Typography>
            <div className="body2">
                <Box className="service1">
                    <Typography variant="h5" sx={{ textAlign: 'center', paddingTop: '10px', color: 'skyblue' }}>XE 4 CHỖ TỰ LÁI</Typography>
                    <Typography sx={{ textAlign: 'center', paddingTop: '50px' }}>Dịch vụ cho thuê xe 4 chỗ tự lái uy tín và chất lượng nhất tại TPHCM. Với chất lượng xe luôn đảm bảo, đa dạng xe các loại xe, được bảo dưỡng cẩn thận. Thủ tục cho thuê nhanh gọn, hệ thống thanh toán rõ ràng, giá cả luôn cạnh tranh nhất.</Typography>
                </Box>

                <Box className="service2">
                    <Typography variant="h5" sx={{ textAlign: 'center', paddingTop: '10px', color: 'skyblue' }}>XE 7 CHỖ TỰ LÁI</Typography>
                    <Typography sx={{ textAlign: 'center', paddingTop: '50px' }}>Dịch vụ cho thuê xe 7 chỗ tự lái tại Sài Gòn cam kết giá thuê xe luôn luôn tốt nhất. Dịch vụ giao xe tận nhà khách hàng. Bạn chỉ cần gọi điện thoại, chúng tôi sẽ mang xe qua tận nhà cho bạn.Thủ tục thuê xe của chúng tôi rất đơn giản và nhanh chóng.</Typography>
                </Box>

                <Box className="service3">
                    <Typography variant="h5" sx={{ textAlign: 'center', paddingTop: '10px', color: 'skyblue' }}>XE CHẠY TOUR</Typography>
                    <Typography sx={{ textAlign: 'center', paddingTop: '50px' }}>Dịch vụ cho thuê xe đi tour không chỉ cho thuê xe tự lái mà còn bao gồm cho thuê xe có người lái, xe đi tour có người hướng dẫn du lịch nên bạn hoàn toàn có thế yên tâm nếu không biết lái xe hay hành trình đi ra sao.</Typography>
                </Box>

                <Box className="service4">
                    <Typography variant="h5" sx={{ textAlign: 'center', paddingTop: '10px', color: 'skyblue' }}>XE CHẠY THÁNG</Typography>
                    <Typography sx={{ textAlign: 'center', paddingTop: '50px' }}>Với mong muốn cung cấp những dịch vụ uy tín, Chúng tôi là công ty được thành lập từ lâu nhằm đáp ứng nhu cầu của khách hàng. Số lượng xe cung cấp cho dịch vụ cho thuê xe tháng là vô cùng lớn, sự đa dạng của các dòng xe từ 4 tới 7 chỗ.</Typography>
                </Box>
                <Box className="service5">
                    <Typography variant="h5" sx={{ textAlign: 'center', paddingTop: '10px', color: 'skyblue' }}>CƯỚI HỎI</Typography>
                    <Typography sx={{ textAlign: 'center', paddingTop: '50px' }}>Dịch vụ cho thuê xe cưới hỏi của chúng tôi với phong cách phục vụ chuyên nghiệp và thân thiện, giá cả cạnh tranh sẽ giúp bạn có một ngày cưới hoàn hảo, trọn vẹn. Chắc chắn quý khách sẽ không tìm được một dịch vụ nào tốt hơn dịch vụ của chúng tôi.</Typography>
                </Box>
                <Box className="service6">
                    <Typography variant="h5" sx={{ textAlign: 'center', paddingTop: '10px', color: 'skyblue' }}>SÂN BAY</Typography>
                    <Typography sx={{ textAlign: 'center', paddingTop: '50px' }}>Một trong những địa chỉ cung cấp dịch vụ thuê xe đưa đón sân bay chất lượng nhất hiện nay. Công ty chúng tôi cung cấp các loại xe đa dạng và giá cả hợp lý nhất. Với tiêu chí lợi ích khách hàng luôn đặt lên hàng đầu!</Typography>
                </Box>
            </div>
        </div>
    )
}