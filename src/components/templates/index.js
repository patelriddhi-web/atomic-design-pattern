import * as React from 'react'
import Header from '../organisms/feature/index'
import SubHeader from '../organisms/sunHeader/index'
import './styles.scss'
import Card from '../molecules/card/index'
import Typography from '../atoms/typography'
import SortBar from '../molecules/sortbar'
import CardDesc from '../molecules/cardDescription/index'
import Pagination from '../molecules/paginationbar/index'
import MoreItems from '../organisms/moreItems/index'
import Footer from '../organisms/footer/index'

const HomePage = () => {
  return (
    <div className="container">
      <Header />
      <SubHeader />
      <div className="main-content">
        <div className="left-nav-wrapper"></div>
        <div className="body-content">
          <div className="store">
            <Typography
              className="heading"
              label="Kindle Store"
              tag="h2"
              fontSize="larger"
              fontColor="mango"
              fontWeight="semiBold"
            ></Typography>
            <span className="subheading">
              <b>Kindle eReaders</b>
            </span>
          </div>
          <div className="card-container">
            <Card
              src="https://images-eu.ssl-images-amazon.com/images/I/5135PETgoRL._AC_SX184_.jpg"
              desc='All-New Kindle (10th Gen), 6" Display now with Buil…'
              brand="Amazon"
              price="7,999"
              rate="2"
            />
            <Card
              src="https://images-eu.ssl-images-amazon.com/images/I/41-KSSFVthL._AC_SX184_.jpg"
              desc='All-New Kindle (10th Gen), 6" Display now with Buil…'
              brand="Amazon"
              price="7,999"
              rate="2.5"
            />
            <Card
              src="https://images-eu.ssl-images-amazon.com/images/I/5135PETgoRL._AC_SX184_.jpg"
              desc='All-New Kindle (10th Gen), 6" Display now with Buil…'
              brand="Amazon"
              price="7,999"
              rate="3.5"
            />
            <Card
              src="https://images-eu.ssl-images-amazon.com/images/I/41-KSSFVthL._AC_SX184_.jpg"
              desc='All-New Kindle (10th Gen), 6" Display now with Buil…'
              brand="Amazon"
              price="7,999"
              rate="5"
            />
          </div>
          <div className="sort-bar">
            <SortBar />
          </div>
          <div className="desc-card-wrapper">
            <CardDesc
              src="https://images-eu.ssl-images-amazon.com/images/I/51SaEBRbwqL._SL218_PIsitb-sticker-arrow-dp,TopRight,12,-18_SH30_OU31_AC_US218_FMwebp_QL70_.jpg"
              heading="How to Stop Worrying and Start Living"
              dateText="14 May 2018 | Kindle eBook"
              by="Héctor García and Francesc Miralles"
              store="Kindle Edition"
              price="₹99.75"
              rate="4"
            />
            <CardDesc
              src="https://images-eu.ssl-images-amazon.com/images/I/51SaEBRbwqL._SL218_PIsitb-sticker-arrow-dp,TopRight,12,-18_SH30_OU31_AC_US218_FMwebp_QL70_.jpg"
              heading="How to Stop Worrying and Start Living"
              dateText="14 May 2018 | Kindle eBook"
              by="Héctor García and Francesc Miralles"
              store="Kindle Edition"
              price="₹99.75"
              bestSeller="true"
              rate="1.3"
            />
            <CardDesc
              src="https://images-eu.ssl-images-amazon.com/images/I/51SaEBRbwqL._SL218_PIsitb-sticker-arrow-dp,TopRight,12,-18_SH30_OU31_AC_US218_FMwebp_QL70_.jpg"
              heading="How to Stop Worrying and Start Living"
              dateText="14 May 2018 | Kindle eBook"
              by="Héctor García and Francesc Miralles"
              store="Kindle Edition"
              price="₹99.75"
              bestSeller="false"
              rate="4"
            />
            <CardDesc
              src="https://images-eu.ssl-images-amazon.com/images/I/51SaEBRbwqL._SL218_PIsitb-sticker-arrow-dp,TopRight,12,-18_SH30_OU31_AC_US218_FMwebp_QL70_.jpg"
              heading="How to Stop Worrying and Start Living"
              dateText="14 May 2018 | Kindle eBook"
              by="Héctor García and Francesc Miralles"
              store="Kindle Edition"
              price="₹99.75"
              rate="3.5"
            />
            <CardDesc
              src="https://images-eu.ssl-images-amazon.com/images/I/51SaEBRbwqL._SL218_PIsitb-sticker-arrow-dp,TopRight,12,-18_SH30_OU31_AC_US218_FMwebp_QL70_.jpg"
              heading="How to Stop Worrying and Start Living"
              dateText="14 May 2018 | Kindle eBook"
              by="Héctor García and Francesc Miralles"
              store="Kindle Edition"
              price="₹99.75"
              bestSeller="true"
              rate="2"
            />
          </div>
          <div className="pagination">
            <Pagination />
          </div>
          <div className="content-para">
            <Typography
              label="Amazon India Welcomes You to the Kindle Store"
              tag="p"
              fontColor="black"
              fontSize="mid"
              fontWeight="semiBold"
            />
            <Typography
              label="The kindle store at Amazon India brings you a huge collection of kindle ebooks, kindle devices and accessories. For all the avid readers out there, this store has everything that you will need. So, browse the entire selection and take your pick."
              tag="p"
              fontColor="black"
              fontSize="regular"
            />
            <Typography
              label="Find Your Kindle Device"
              tag="span"
              fontColor="black"
              fontSize="regular"
              fontWeight="semiBold"
              className="para"
            />
            <Typography
              label="If you are always on the go and carry your books with you, we have an easier solution for you. While the physical feel of books are really enjoyable, it is not possible to carry them with yourself always. The weight of books can become a problem, especially if you are travelling frequently. Keeping such requirements in mind, Amazon India brings you the kindle e-reader. Available in multiple sizes and specifications, these e-readers are extremely lightweight and can contain thousands of books. The basic kindle model has an anti-glare screen which replicates the feel of real paper. It does not strain the eyes so that you can read your favourite book for hours. The kindle Paperwhite also has a 6 inches big screen which comes with a backlight. It is specially designed to help you read in the dark. Along with the high-resolution screen, it is also equipped with a built-in light and Wi-Fi. You will also find the high-end models, kindle Voyage and kindle Oasis. Kindle Voyage comes with an adaptive built-in light and a page press sensor. Measuring only 7.6 mm thick, this model is extremely lightweight. Kindle Oasis flaunts a state-of-the-art built and incorporates the latest technology. It is crafted in a way to give you the feel of a real book. It comes with a hand bar to provide you more grip. And, it also includes page turning buttons. The batteries of all the kindle devices will last you not just for days but for weeks. So, pick your own kindle and stay connected to your friend, philosopher and guide always. You will also find various kindle accessories like charging adapter, kindle cover, screen guard and more."
              tag="span"
              fontColor="black"
              fontSize="regular"
            />
            <Typography
              label="Choose from a Huge Collection of Kindle E-Books"
              tag="p"
              fontColor="black"
              fontSize="regular"
              fontWeight="semiBold"
              className="para-2"
            />
            <Typography
              label="Find the kindle editions of all your favourite books here, at Amazon India. From the popular Indian writings to the classic world literature, find all that you are looking for. And, the best part is that kindle book editions cost you much lesser than their paperback or hardcover counterparts. So, keep adding to your collection without burning a hole in your pocket."
              tag="p"
              fontColor="black"
              fontSize="regular"
              className="para-3"
            />
            <hr></hr>
          </div>
        </div>
      </div>
      <div className="more-seller">
        <MoreItems />
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  )
}

export default HomePage
