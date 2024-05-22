import React from 'react'
import "../index.css"
import { useLanguage } from '../Context/LanguageContext'
import { motion } from 'framer-motion'


const AboutUs = () => {

  const {language}=useLanguage();

  return (
    <div className='about-us ' id="hakkimizda">
        <div className='about-container flex flex-col max-w-[800px] text-center items-center !important justify-center mx-auto'>
          <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{once:true, amount:0.5}}
          transition={{duration:1}}
          variants={{
            hidden:{opacity:0, x:-200},
            visible:{opacity:1 , x:0}
          }}>
            <div className='part-1 text-center   ' >
            <strong  className=' text-[#71b100] text-3xl font-bold ' >{language === "TURK" ? "HOŞGELDİNİZ" : "WELCOME"}</strong>
            <div className='separator-1'></div>
                <p className='mx-[75px]' >
                {language === "TURK" ? "    Size benzersiz ve unutulmaz ev deneyimleri sunmak için buradayız. Her köşede sıcaklığı hissedeceğiniz, estetikle tasarlanmışevlerimizle sizi karşılıyoruz. Konfor ve zarafetin bir araya geldiği bu alanlarda, hayalinizdeki evi bulmak için sizleri bekliyoruz. Huzur dolu bir yaşam için adım atın!  "
                 : "We are here to offer unique and unforgettable home experiences. Welcoming you with homes designed with aesthetics where you will feel warmth in every corner. In these spaces where comfort and elegance come together, we invite you to find the home of your dreams. Take a step for a peaceful life!"}
                </p>
                </div>
                </motion.div>
           

            <motion.div className='part-2 text-center mt-6'
             initial="hidden"
             whileInView="visible"
             viewport={{once:true, amount:0.5}}
             transition={{duration:1}}
             variants={{
               hidden:{opacity:0, x:200},
               visible:{opacity:1 , x:0}
             }}     >
            <strong  className=' text-[#71b100] text-3xl font-bold '>{language === "TURK" ? "HAKKIMIZDA" : "ABOUT US"}</strong>
            <div className='separator-1'> </div>
                <p className='mx-[75px]'>
                { language==="TURK" ?"Emlakçı, mesleki etik değerlere ve profesyonel standartlara bağlı birşekilde hareket eden, mali, hukuki ve teknik konularda sağlam bir eğitimve bilgi birikimine sahip, işini titizlikle değerlendiren bir uzmandır.Dürüstlük ilkesini temel alarak, müşterileriyle etkili iletişim kurabilen ve güvenilir bir iş ortamı sunan emlakçı, insan ilişkilerinde ölçülü ve saygılı bir tutumu benimsemektedir. Kendi kişiliği, ofisi ve çalışanlarıyla bir bütün olarak güven duygusu oluşturmayı amaçlayan emlakçı, müşterilerinin beklentilerini karşılamak ve aşmak için çaba sarf etmektedir " :"A real estate agent is a professional committed to conducting business with the utmost adherence to professional ethics and standards. With a robust education and knowledge base in financial, legal, and technical aspects, the agent meticulously evaluates their work. Operating on the principle of honesty, the real estate agent excels in establishing effective communication with clients, providing a reliable and transparent business environment. In interpersonal relationships, they adopt a measured and respectful approach, aiming to create an overarching sense of trust through their personality, office, and team. The agent consistently endeavors to not only meet but surpass the expectations of their clients."}
                </p>
                </motion.div>
              
           

            <motion.div className='part-3 text-center mt-6 '
             initial="hidden"
             whileInView="visible"
             viewport={{once:true, amount:0.5}}
             transition={{duration:1}}
             variants={{
               hidden:{opacity:0, y:200},
               visible:{opacity:1 , y:0}
             }}           
            >
            <strong className=' text-[#71b100] text-3xl font-bold '>{language === "TURK" ? "HİZMETLERİMİZ" : "OUR SERVICES"}</strong>
            <div className='separator-1'></div>
                <p className='mx-[75px]' id='portfolyo'>
                {language === "TURK" ? "Konut Emlak sektöründeki temel sorun, sektöre genel bakış açısının eksikliğidir. Günümüzde emlakçılık, mesleki, kültürel altyapı ve teknolojik donanım gerektirmeyen, herkesin kolaylıkla yapabileceği bir faaliyet olarak algılanmaktadır. Türk halkı genel olarak gayrimenkul edinmeye eğilimlidir ve bu tür yatırımlara diğer alternatiflere göre daha fazla güven duyar. Biz, deneyimli ve uzman kadromuzla, yatırımcılara güvenilir bir gayrimenkul firması olarak hizmet sunuyoruz. Yatırımcıların gayrimenkul değerlendirme ve yönetiminde bizlere güvenebileceği bir çözüm ortağı olarak faaliyet gösteriyoruz." 
                : "The fundamental issue in the Residential Real Estate sector is the lack of a comprehensive perspective on the industry. Presently, real estate is perceived as an activity that does not require professional, cultural, or technological infrastructure – something that anyone can easily undertake. The Turkish population, in general, tends to incline towards real estate acquisition, exhibiting a higher level of trust in such investments compared to other alternatives. With our experienced and expert team, we provide services to investors as a reliable real estate firm. We operate as a trusted partner for investors in property assessment and management, offering a solution they can confidently rely on."}
                </p>
            
            </motion.div>
            
            <div className='part-3 text-center mt-8 ' >
            <strong className=' text-[#71b100] text-3xl font-bold '>{language === "TURK" ? "PORTFOLYO" : "PORTFOLIO"}</strong>
            <div className='separator-1 ' > </div>
            </div>

        </div>
    </div>
  )
}

export default AboutUs
