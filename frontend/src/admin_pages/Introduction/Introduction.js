import React from 'react'
import './styles.css'
import heroImage from "../../assets/images/heroimage.jpg"
export default function Introduction() {
    return (
        <>
            <div className="hero-image">
                <img src={heroImage} width='100%' height='auto' />
                <div className="hero-text">
                    <h1>Giới thiệu</h1>
                </div>
            </div>
            <div className='container p-5'>
                <h2 className='pb-4'>Về chúng tôi</h2>
                <p>Với 100 nhà máy đặt tại 35 quốc gia, Nestlé Water sở hữu 52 nhãn hiệu đáp ứng nhu cầu khách hàng khác
                    nhau tại mỗi quốc gia. Nước được coi là sự lựa chọn cho việc bù chất hàng ngày cho cơ thể vì nó không
                    thêm bất kỳ calo trong khẩu phần ăn, đặc biệt là tình trạng béo phì trên thế giới đang ngày càng gia tăng.
                    Nước đóng chai là nước giải khát tốt cho sức khỏe do không chứa calo, nguồn gốc nước được kiểm soát,
                    chất lượng vượt trội, mùi vị và sự tiện lợi.</p>
                <p>Nestle Water thường xuyên triển khai các hoạt động nghiên cứu nhằm giúp người tiêu dùng hiểu rõ hơn
                    vai trò quan trọng của nước uống đối với sức khỏe. Ngoài ra, công ty luôn đặt vấn đề bảo vệ môi trường
                    là ưu tiên hàng đầu trong các hoạt động doanh nghiệp. Từ năm 2010 đến nay, Nestle Water không ngừng
                    cải tiến bao bì, giảm thiểu trọng lượng chai nhựa xuống mức thấp nhất (giảm 9%/ lít so với trước đây).
                    Đồng thời, thu gom và tái sự dụng nguyên liệu, hạn chế tối đa việc tác động đến môi trường trong quá
                    trình vận chuyển là những tiêu chí công ty đang hướng tới.</p>
                <p>Công ty TNHH La Vie chính thức trở thành thành viên của tập đoàn Nestlé Water từ năm 1992. Trong suốt
                    gần 30 năm qua, công ty nước khoáng thiên nhiên La Vie không ngừng nỗ lực phát triển cung ứng sản phẩm
                    và dịch vụ tốt nhất cho khác hàng. Theo BC Nielsen về sản lượng năm 2019, La Vie trở thành thương hiệu
                    nước khoáng số 1 tại Việt Nam.</p>
            </div>
            <div className='container-fluid bgColor'>
                <h1 className='col-12 text-center p-5'>Những người đồng sáng lập</h1>
                <div className='row justify-content-evenly'>
                    <div className='col-md-5 informationMember mb-5 bg-light'>
                        <h2>Lê Văn Bằng</h2>
                        <p>Sinh ngày 25/11/2002. Bằng là sinh viên của trường Đại học Bách Khoa thành phố Hồ Chí Minh, khoa Khoa học và Kỹ thuật máy tính.</p>
                    </div>
                    <div className='col-md-5 informationMember mb-5 bg-light'>
                        <h2>Lê Văn Bằng</h2>
                        <p>Sinh ngày 25/11/2002. Bằng là sinh viên của trường Đại học Bách Khoa thành phố Hồ Chí Minh, khoa Khoa học và Kỹ thuật máy tính.</p>
                    </div>
                </div>
                <div className='row justify-content-evenly'>
                    <div className='col-md-5 informationMember mb-5 bg-light'>
                        <h2>Lê Văn Bằng</h2>
                        <p>Sinh ngày 25/11/2002. Bằng là sinh viên của trường Đại học Bách Khoa thành phố Hồ Chí Minh, khoa Khoa học và Kỹ thuật máy tính.</p>
                    </div>
                    <div className='col-md-5 informationMember mb-5 bg-light'>
                        <h2>Lê Văn Bằng</h2>
                        <p>Sinh ngày 25/11/2002. Bằng là sinh viên của trường Đại học Bách Khoa thành phố Hồ Chí Minh, khoa Khoa học và Kỹ thuật máy tính.</p>
                    </div>
                </div>


            </div>
        </>

    )
}

