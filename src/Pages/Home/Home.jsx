import { useEffect, useState } from "react";
import "./Home.css";
import bannerHome from "../../assets/banner-home.jpg";
import Products from "./Products/Products";

const Home = () => {
  const [recentlyViewed, setRecentlyViewed] = useState([]);
  const [recentlyViewedPage, setRecentlyViewedPage] = useState(1);

  useEffect(() => {
    const storedViewed =
      JSON.parse(localStorage.getItem("recentlyViewed")) || [];
    setRecentlyViewed(storedViewed);
  }, []);

  return (
    <div className="Home">
      <div className="Banner-Home">
        <img src={bannerHome} className="Img-Banner-Home" alt="Banner Home" />
      </div>
      <div id="about-us"></div>
      <div className="About-Us">
        <h1>No Name Store</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
          assumenda eos laudantium, dolorem in esse quisquam neque beatae
          ratione accusantium at architecto facilis earum. Unde sed at eligendi
          nisi velit pariatur dolorem? Facere cupiditate possimus at! Aperiam,
          tempora mollitia, officia voluptatibus totam laborum voluptatem
          dolores odit ratione esse est maxime tempore necessitatibus
          reprehenderit sed ullam eaque enim culpa beatae repudiandae facere
          placeat harum. Culpa aliquid voluptatem quas quia iste illum omnis
          cumque temporibus soluta? Obcaecati esse distinctio incidunt atque
          aliquid illum recusandae officiis cupiditate eum sint quam
          necessitatibus facere magni, accusamus laborum? Ratione aspernatur et
          illo excepturi laudantium quos, eum impedit optio debitis blanditiis,
          sed possimus id nostrum delectus voluptates voluptas facilis ipsam
          ipsum consectetur? Maiores blanditiis perferendis enim aliquid!
        </p>
      </div>
      <div id="text"></div>
      <div className="Text">
        <h2>Lorem, ipsum dolor</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque ipsum
          neque suscipit voluptate dicta quia inventore. Possimus autem nobis
          consequatur quae corrupti pariatur earum, totam aperiam ex
          reprehenderit laborum, molestias doloremque fugit neque beatae omnis
          perspiciatis? Aut mollitia impedit pariatur quibusdam explicabo nulla
          ipsam repellat accusantium repudiandae, debitis perspiciatis! Pariatur
          non odit voluptate! Iure inventore numquam accusantium aperiam
          voluptas maiores unde et, vitae, officia rem modi mollitia, nesciunt
          odio fugit impedit! Labore incidunt, tempora ipsum animi ab aspernatur
          dignissimos repellat eligendi laboriosam natus rem consequuntur
          molestiae facere cum illum itaque vitae accusantium perferendis veniam
          ut? Iste natus sunt non quaerat! Aliquid nobis velit tenetur inventore
          officiis repellat itaque, omnis consequuntur, dolorum ad nihil error
          explicabo doloribus, recusandae laudantium fugiat alias officia unde?
          Nobis, aliquam, sint nostrum itaque mollitia id cum vitae hic fugiat
          architecto a, sequi culpa facilis voluptates excepturi! Eius iusto
          soluta quidem vero id quod veniam impedit, illo recusandae, alias
          minima obcaecati assumenda harum nesciunt ducimus nobis quos ipsa
          tempore ipsam provident, aperiam vel? Obcaecati, eum adipisci, in nam
          et possimus odio natus ut dolor maiores provident error neque iusto
          accusantium laudantium temporibus libero quo, distinctio ab assumenda.
          Id provident nesciunt unde, eveniet commodi cum. Natus, recusandae
          vero!
        </p>
      </div>
      <div id="products"></div>
      <div className="Shop-Products">
        <h2>Products</h2>
        <Products />
      </div>
      <p className="Last">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque ipsum
        neque suscipit voluptate dicta quia inventore. Possimus autem nobis
        consequatur quae corrupti pariatur earum, totam aperiam ex reprehenderit
        laborum, molestias doloremque fugit neque beatae omnis perspiciatis? Aut
        mollitia impedit pariatur quibusdam explicabo nulla ipsam repellat
        accusantium repudiandae, debitis perspiciatis! Pariatur non odit
        voluptate! Iure inventore numquam accusantium aperiam voluptas maiores
        unde et, vitae, officia rem modi mollitia, nesciunt odio fugit impedit!
        Labore incidunt, tempora ipsum animi ab aspernatur dignissimos repellat
        eligendi laboriosam natus rem consequuntur molestiae facere cum illum
        itaque vitae accusantium perferendis veniam ut? Iste natus sunt non
        quaerat! Aliquid nobis velit tenetur inventore officiis repellat itaque,
        omnis consequuntur, dolorum ad nihil error explicabo doloribus,
        recusandae laudantium fugiat alias officia unde? Nobis, aliquam, sint
        nostrum itaque mollitia id cum vitae hic fugiat architecto a, sequi
        culpa facilis voluptates excepturi! Eius iusto soluta quidem vero id
        quod veniam impedit, illo recusandae, alias minima obcaecati assumenda
        harum nesciunt ducimus nobis quos ipsa tempore ipsam provident, aperiam
        vel? Obcaecati, eum adipisci, in nam et possimus odio natus ut dolor
        maiores provident error neque iusto accusantium laudantium temporibus
        libero quo, distinctio ab assumenda. Id provident nesciunt unde, eveniet
        commodi cum. Natus, recusandae vero!
      </p>
      {recentlyViewed.length > 0 && (
        <div className="Recently-Viewed">
          <h2>Recently Viewed</h2>
          <Products
            products={recentlyViewed}
            paginationPage={recentlyViewedPage}
            setPaginationPage={setRecentlyViewedPage}
          />
        </div>
      )}
      <p className="Last">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque ipsum
        neque suscipit voluptate dicta quia inventore. Possimus autem nobis
        consequatur quae corrupti pariatur earum, totam aperiam ex reprehenderit
        laborum, molestias doloremque fugit neque beatae omnis perspiciatis? Aut
        mollitia impedit pariatur quibusdam explicabo nulla ipsam repellat
        accusantium repudiandae, debitis perspiciatis! Pariatur non odit
        voluptate! Iure inventore numquam accusantium aperiam voluptas maiores
        unde et, vitae, officia rem modi mollitia, nesciunt odio fugit impedit!
        Labore incidunt, tempora ipsum animi ab aspernatur dignissimos repellat
        eligendi laboriosam natus rem consequuntur molestiae facere cum illum
        itaque vitae accusantium perferendis veniam ut? Iste natus sunt non
        quaerat! Aliquid nobis velit tenetur inventore officiis repellat itaque,
        omnis consequuntur, dolorum ad nihil error explicabo doloribus,
        recusandae laudantium fugiat alias officia unde? Nobis, aliquam, sint
        nostrum itaque mollitia id cum vitae hic fugiat architecto a, sequi
        culpa facilis voluptates excepturi! Eius iusto soluta quidem vero id
        quod veniam impedit, illo recusandae, alias minima obcaecati assumenda
        harum nesciunt ducimus nobis quos ipsa tempore ipsam provident, aperiam
        vel? Obcaecati, eum adipisci, in nam et possimus odio natus ut dolor
        maiores provident error neque iusto accusantium laudantium temporibus
        libero quo, distinctio ab assumenda. Id provident nesciunt unde, eveniet
        commodi cum. Natus, recusandae vero!
      </p>
    </div>
  );
};

export default Home;
