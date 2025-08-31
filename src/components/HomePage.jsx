import Earth from './Earth';
import SkillCard from './SkillsCard';
import { motion, useScroll, useSpring, useTransform, } from "motion/react"
import html from "../assets/images/HTML5.svg"
import css from "../assets/images/CSS3.svg"
import js from "../assets/images/JavaScript.svg"
import tailwind from "../assets/images/Tailwind_CSS.svg"
import react from "../assets/images/React.svg"
import node from "../assets/images/Node.js.svg"
import express from "../assets/images/Express.svg"
import mongo from "../assets/images/MongoDB.svg"
import { useRef } from 'react';

export default function HomePage() {
  const techSkill = [
    {
      image: html,
      text: "HTML"
    },
    {
      image: css,
      text: "CSS"
    },
    {
      image: js,
      text: "JavaScript"
    },
    {
      image: tailwind,
      text: "Tailwind CSS"
    },
    {
      image: react,
      text: "React"
    },
    {
      image: node,
      text: "Node.js"
    },
    {
      image: express,
      text: "Express.js"
    },
    {
      image: mongo,
      text: "MongoDB"
    },

  ]
  const myRef = useRef()
  console.log(window.innerWidth);
  const { scrollYProgress } = useScroll({ target: myRef, offset: ["0.5 1 ","1 0"] })

  function giveOutputRange(){
    if (window.innerWidth > 768) {
      return "-140%";
    }
    else {
      return "-280%";
    }
  }
  const rawX = useTransform(scrollYProgress, [0, 0.6], ["10%", giveOutputRange()])
  const x = useSpring(rawX, {
    stiffness: 100,
    damping: 20,
  })
  return (
    <>
      <div className="relative w-full " style={{ minHeight: 'calc(100vh - 92px)' }}>
        <div className="absolute inset-0">
          <Earth />
        </div>

        <div className="intro relative z-10 top-24  text-center  h-full  text-white">
          <h1 className="md:text-5xl text-2xl font-bold ">Hi, I am Dewashish Tikas</h1>
          <p className="md:text-3xl text-lg mt-4">A Full Stack Web Developer</p>

        </div>
        <div className="relative z-10 mt-28  text-center  h-[100vh]  text-white " ref={myRef}>
          <div className="sticky  top-50 overflow-hidden"><h1 className="md:text-4xl text-xl font-bold ">Tech Skills</h1>
            <motion.div className="grid grid-flow-col md:auto-cols-[calc(80%/3)] auto-cols-[calc(80%/2)] mt-5 gap-10 px-2 md:px-5" style={{ x }}>
              {
                techSkill.map((skill, index) => (
                  <SkillCard key={index} image={skill.image} text={skill.text} />
                ))
              }</motion.div>
          </div>
        </div>

      </div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptatibus sed ea quia eveniet iure dolore quam aspernatur libero quae! Laborum voluptate reiciendis id sequi? Consectetur explicabo iste fugit sapiente saepe, ipsam sit quisquam molestiae natus voluptate odio facere, cupiditate voluptatem molestias architecto minima. Sapiente accusamus minus omnis similique error veritatis qui ducimus accusantium amet ipsum dolorum, in quos tempore eius illum optio libero non facere eos. Possimus quibusdam laboriosam aut explicabo? Libero explicabo molestias alias harum ex delectus quae. Reiciendis voluptatibus saepe exercitationem nostrum, dolores maxime recusandae delectus officiis, libero eligendi sed quae esse dolor, dolorem perferendis! Blanditiis, sunt voluptas optio maiores reiciendis animi sapiente inventore aut. Architecto reiciendis facilis laborum, esse id eligendi magnam. Possimus dignissimos iusto beatae eum autem incidunt ipsum adipisci, totam molestias sequi cupiditate unde voluptate velit, obcaecati sunt ipsa deserunt, distinctio commodi omnis reiciendis recusandae repellat repudiandae sed eaque? Maxime optio consectetur nemo impedit et dolor cumque aut quis fugit placeat blanditiis repellat omnis modi libero laboriosam rerum sunt numquam voluptatibus, error illo ducimus rem eos nobis quo! Quas laboriosam deleniti nesciunt unde eveniet! Cupiditate pariatur iusto soluta. Repudiandae, ipsum temporibus nemo nam, voluptate unde odio adipisci deleniti rerum hic a officia molestias repellat? Repudiandae totam tempore pariatur voluptates itaque dignissimos nobis numquam recusandae officiis fugit, iste harum laudantium dolorum error, rem alias cumque! Blanditiis soluta molestias fuga, perspiciatis consequuntur, laboriosam, aliquam quisquam nobis quo hic similique maxime alias praesentium in. Perspiciatis, obcaecati nulla odit molestiae laboriosam cupiditate doloribus, voluptate dignissimos amet optio recusandae? Voluptate dolorem impedit, nemo, earum sapiente similique eius ad possimus quam neque natus mollitia nostrum? Quod quisquam distinctio fuga minima. Necessitatibus placeat sunt itaque maiores voluptatibus repudiandae! Aut ipsam sapiente atque magni provident dignissimos repellat, accusantium, blanditiis quisquam, reprehenderit doloribus cupiditate ab odio voluptatum ea eveniet. Consequuntur vitae enim maxime reprehenderit, officia id nisi nesciunt magnam fugit obcaecati blanditiis minima velit culpa voluptates, repellendus porro tempore quisquam hic veritatis dolor nulla accusamus. Ipsum rem ab, recusandae porro ipsam repudiandae ex! Saepe mollitia eaque dolore veritatis quia. Quod odio cumque quia, quidem porro hic molestiae tempore. Rem neque accusantium facilis, repellat ad quisquam earum, ab quasi maiores tempora excepturi aut accusamus repellendus rerum doloribus cum quos quaerat illo! Recusandae, animi cumque earum quas labore vitae debitis amet dolore pariatur blanditiis. Autem corporis magnam fugiat. Odio possimus sapiente nisi? Atque iste dolorem pariatur amet soluta impedit commodi nihil. Eos quos similique nam beatae perferendis. Repellendus debitis fuga magni, rem magnam ad esse consequuntur libero quisquam autem blanditiis amet ipsam harum, voluptatum corrupti nemo, obcaecati eius dolore? Delectus, corrupti numquam! Optio pariatur eaque nesciunt sapiente commodi nemo tempora ut atque velit aliquid explicabo qui voluptatum veniam nam delectus quisquam maxime incidunt illo sit, tenetur hic. A deleniti architecto, veritatis, in atque quibusdam ipsa sapiente suscipit aperiam expedita delectus assumenda quas, repellat exercitationem soluta nam ullam animi laborum similique rerum excepturi! Accusamus asperiores earum repellat illum laboriosam nisi ipsum corrupti quos sapiente! Sed esse aperiam repellendus veniam at tenetur odio culpa voluptates? Quibusdam fugit perferendis omnis facilis nihil sit culpa quas corporis exercitationem delectus expedita beatae mollitia, officiis earum, incidunt ea similique saepe nostrum officia quam. Aut voluptatem suscipit reprehenderit libero iusto? Sequi temporibus omnis non velit fugiat modi, blanditiis, quisquam odit aliquid culpa unde. Assumenda eaque, voluptates odit autem facere nihil. Perspiciatis in repellendus ipsam nesciunt? Dolore officiis quo iure? Libero earum accusamus, dolorem facilis laborum nulla veniam maiores at repellat illo tenetur tempore ea corrupti. Aliquam, officiis repellendus? Atque natus, odit, dolor, officiis asperiores veritatis vero reiciendis quasi ipsa beatae neque cumque earum eum quis a voluptatem fugit? Omnis, esse eum quae laborum tempore saepe quibusdam soluta ab voluptates, alias nostrum consectetur autem delectus accusamus placeat corporis perferendis vitae doloremque? Error, consequuntur voluptatibus reprehenderit animi voluptatem dolor. Inventore natus vitae amet quasi ullam culpa, tenetur velit deleniti, vel dolorum, voluptatem debitis aliquid ab a! Iste neque perspiciatis quisquam facilis optio voluptates sapiente, veniam nobis fugit excepturi debitis ipsum harum adipisci illum natus aperiam amet rerum voluptatibus omnis cupiditate iusto. Corrupti id earum quae minus. Excepturi laboriosam corrupti dolorem doloremque laborum itaque consectetur suscipit, tempore quas, vero voluptatem ratione quidem sint impedit cum unde. Pariatur voluptatem aspernatur autem doloremque maxime quisquam asperiores veritatis fuga ipsa cupiditate modi, quis natus incidunt nihil voluptates nam est mollitia laudantium commodi quidem delectus adipisci omnis ab et. Quas alias ratione quia neque, velit ducimus eum accusantium nemo ipsam ipsa, tempora tempore! Corporis porro nostrum modi dicta fuga, similique, minima corrupti alias numquam aliquam tempora necessitatibus ipsam repellendus esse! Omnis temporibus tempore voluptatibus error dolorum debitis voluptatem vitae, reprehenderit repellendus provident sunt earum excepturi nobis accusantium hic, natus unde distinctio! Numquam accusamus adipisci culpa atque perspiciatis eius laboriosam minus eaque eligendi quis, est delectus sit et ullam sequi minima a sint! Quibusdam doloremque labore rem ex voluptas aliquam soluta quam sequi asperiores voluptatum optio obcaecati rerum expedita omnis corrupti quas, a totam at id facilis quis! Expedita, quas praesentium possimus, ea enim rerum quod unde exercitationem dolores inventore hic vitae sapiente similique accusamus. Rem, eligendi amet quia corporis consequatur blanditiis autem laborum esse assumenda adipisci nihil voluptatem magnam mollitia qui ipsa, odit eos inventore ea fuga aspernatur dolorem? Provident, ut reprehenderit, ipsa officia odit esse fuga tempore omnis incidunt quisquam corporis optio. Est, recusandae tenetur, neque odit odio ipsum consequuntur id aperiam dicta, quibusdam magnam. Odio quia praesentium modi debitis distinctio labore quam recusandae, veritatis nihil ea pariatur laboriosam nemo tempora dolorum quaerat eveniet exercitationem, consectetur fugit. Quaerat exercitationem magni asperiores quisquam qui delectus velit accusantium eaque voluptatem eum? Porro fugiat expedita voluptas explicabo voluptate earum quas optio modi possimus culpa ipsa quaerat itaque quae mollitia sapiente ratione vitae voluptates repellat sequi repellendus, consequatur quisquam, sed cupiditate eum. Veniam molestias rerum dolorem quod, ab consequatur inventore ipsa expedita quidem impedit corporis cumque officia, necessitatibus laudantium voluptatibus repudiandae nam modi a voluptatem magni sit deserunt ea asperiores? A id minus quisquam rem suscipit ut, tempore, natus architecto praesentium, autem dolorem corrupti aliquid. Amet eaque nulla dolor? Itaque, inventore ullam. Provident illo sed, debitis sint perspiciatis iusto? Ducimus et distinctio ad delectus quo praesentium debitis. Aliquid quis reprehenderit natus perspiciatis ipsa. Fuga delectus eos exercitationem inventore explicabo! Ullam eius, ea accusamus quaerat fugiat quo repellendus cupiditate obcaecati iusto culpa perferendis repudiandae fugit ut, quod, nisi eum aspernatur? Recusandae officia rem tenetur distinctio explicabo autem asperiores possimus corrupti nostrum tempore. Iusto cum adipisci magni veniam pariatur suscipit dolor laboriosam totam nemo, reprehenderit culpa perferendis maxime porro ea, aspernatur recusandae mollitia velit doloribus delectus assumenda esse molestias non necessitatibus! Deleniti, iure alias ipsam, vel perspiciatis unde ipsum odio qui quasi magnam rem perferendis repellat officiis blanditiis excepturi soluta cumque repudiandae maiores ut amet! Quibusdam magni assumenda tenetur iusto dolore optio quae aperiam sapiente beatae autem necessitatibus voluptatum dignissimos doloremque magnam repellat distinctio, nulla odio sed. Excepturi est possimus velit sapiente placeat, odit harum eligendi qui mollitia itaque debitis nihil consequuntur, maxime a modi amet expedita perspiciatis alias dolore dolores officiis ab ad non pariatur! Beatae sed temporibus ea aliquam animi necessitatibus dicta suscipit maxime aperiam aut nisi officiis nobis, laudantium reiciendis quibusdam consequuntur minima, aliquid, fugiat officia voluptate? Culpa a placeat sint, illo mollitia assumenda quasi possimus, exercitationem enim totam, earum cumque sed debitis dolorem dolor deleniti nostrum amet reiciendis voluptatum commodi nesciunt eligendi nulla. Unde non iusto culpa quos atque quo tenetur quam iure, dolorum perferendis ex expedita qui, maxime tempore iste nulla, laboriosam deleniti quis incidunt aut sunt asperiores? Expedita officiis harum accusamus laboriosam eaque sed magni totam, pariatur iure distinctio nulla placeat excepturi quae reprehenderit, voluptas ut, atque odio id maiores molestias perferendis similique illo deserunt sint. Recusandae sit iusto earum hic eaque corporis numquam sint sapiente voluptate necessitatibus? Fugiat consequatur mollitia, quae impedit dolor corporis id blanditiis similique nulla. Dolore, iure magni! Numquam quos illo quisquam dolore molestias ducimus ut quis esse incidunt minima velit tenetur recusandae a hic consequuntur, harum voluptate cupiditate, illum, debitis eum temporibus molestiae repudiandae? Iste nihil blanditiis, voluptatibus totam, eum deleniti eligendi placeat consequuntur veritatis magnam fugit sint consectetur error cum, saepe earum! Laudantium perspiciatis, deserunt temporibus, distinctio saepe commodi maiores accusantium sunt optio quisquam cum. Sapiente dignissimos qui aspernatur atque cumque officia suscipit fugit accusantium quae commodi sit, perferendis harum fuga quo sunt et aliquam reprehenderit, quasi inventore. Rem, possimus. Commodi, aliquid eius iure neque iste quidem suscipit quas perferendis enim laborum! Esse mollitia impedit fugiat consequuntur consectetur nihil cupiditate non iste officia voluptates et ab, necessitatibus beatae tempora dolores odit ullam, id veritatis! Totam impedit quisquam animi culpa velit atque ipsam possimus, explicabo officiis, at debitis aliquam nulla numquam optio illum dolores laudantium corporis! Ex blanditiis voluptate fuga ipsam, quidem distinctio reiciendis accusamus tenetur voluptas eius et at consectetur repudiandae esse quod ab praesentium eum, omnis aliquid. Illo, repellendus assumenda numquam obcaecati expedita corporis ipsa. Numquam quidem in nostrum quos esse praesentium ullam dignissimos. Sapiente itaque magnam facilis ipsum, quis consequuntur distinctio quisquam ipsa harum dolor similique fuga doloribus nihil odit suscipit corrupti. Molestias quas autem incidunt omnis laborum ab iure consequuntur quisquam sit. Fugit accusantium quidem sint ex voluptatem fugiat ratione quae voluptates iusto ea laboriosam molestiae, vel necessitatibus. Consectetur corporis obcaecati alias quod fuga, sit saepe! Eius, esse omnis! Veniam eos dignissimos magni excepturi qui consectetur id, dolorem a esse itaque. Dolorem obcaecati, quisquam explicabo ipsa voluptatibus repellat omnis magni vel praesentium adipisci quaerat enim culpa quam laudantium consectetur accusamus rerum ullam quidem. Explicabo unde quo natus laudantium aliquam assumenda magnam ea fugiat nulla aliquid atque molestias distinctio dolor, sint enim illum rem aut facilis id et vitae deserunt sed nostrum eveniet? Odit corporis, doloremque ipsa, nam culpa velit voluptatem asperiores ad libero ratione illum! Aperiam adipisci ea repellat sapiente provident ducimus quibusdam assumenda temporibus tempore quae accusamus excepturi eaque vel non ipsum quos laudantium, corporis eum quasi, velit fugiat magnam facilis atque culpa. Sint ut eos accusantium labore esse doloribus, veniam enim exercitationem quis quam magni molestiae ullam maxime qui quod voluptatibus explicabo? Deserunt rem autem quos quaerat molestias voluptate, doloribus quis aut animi impedit a labore quod magni, assumenda accusamus sint at tempore obcaecati quam aspernatur eaque? Sequi delectus nesciunt cumque, mollitia repellat dolore consequuntur possimus architecto repudiandae dolores ut eligendi alias velit commodi adipisci vero maxime dolorem dicta vitae obcaecati eius. Voluptas unde, sint esse reiciendis, nam quae ex ullam asperiores quaerat vitae earum pariatur? Repellendus natus explicabo obcaecati, consequuntur quia saepe quam alias esse eius quibusdam aspernatur placeat iure suscipit eos tempore eum dolore ipsa labore porro consectetur dolorem accusantium illo? Laudantium tenetur neque ex iste aspernatur aut veniam earum, autem, quam animi pariatur assumenda placeat aperiam et itaque sint quas dolorem quo. Accusantium laboriosam voluptatem ipsam odit sint recusandae iusto ad maiores laudantium facere. Voluptatibus quisquam illum debitis at! Fugiat numquam cum ipsum optio dolorum aperiam quam libero eius alias? Omnis modi consequatur hic debitis nemo doloribus, iste ipsa esse tempora velit harum magni laboriosam quod voluptatum nisi fuga quisquam impedit excepturi quos. Sapiente necessitatibus labore, voluptatum quo, quas reiciendis qui totam rem sequi omnis temporibus fuga tempore nihil hic, laudantium consectetur molestiae blanditiis commodi. Optio nostrum, laborum aliquid pariatur perferendis maxime nesciunt, molestiae necessitatibus omnis neque consectetur ab repudiandae suscipit distinctio nam illo earum, laudantium odio dolore molestias corporis tenetur expedita. Debitis eius eaque et totam quos nam ab sint fugit id inventore in rerum, soluta, laudantium quisquam nisi iure blanditiis voluptatem! Deserunt nihil accusamus sint ducimus vitae! Molestiae accusamus minima fugiat totam omnis in neque sed libero nulla, nemo saepe quos ipsam optio porro vitae obcaecati! Architecto repudiandae et vero voluptatem similique illo autem numquam perferendis optio tempora. Adipisci vitae beatae, rerum dolorum fugiat modi ab cupiditate ipsam, ea doloremque rem accusantium earum aliquam. Nisi minima voluptatibus maxime unde recusandae quam sunt officia nihil fuga animi repellendus iusto, omnis ut quas soluta fugit porro vel, voluptates placeat ipsam vitae quis. At neque magnam quis fuga. Nobis cumque voluptatem commodi. Officia debitis eos nulla cum temporibus molestias pariatur perspiciatis officiis accusantium inventore omnis deleniti, error aperiam illum ut necessitatibus sint consectetur mollitia perferendis.</div>
    </>
  );
}
