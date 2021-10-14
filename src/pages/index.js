import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>WIP :-)</h1>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/minecraftmaps/">My maps!</Link> <br />

      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue velit ac mauris commodo cursus. Curabitur rhoncus laoreet lobortis. Duis maximus tellus a libero maximus, et viverra elit accumsan. Pellentesque at urna at lectus molestie rhoncus. Fusce id pharetra lorem. Nulla pellentesque mollis volutpat. In non commodo turpis, eget ultrices magna. Sed felis eros, posuere vitae laoreet eu, pellentesque id urna. Donec fringilla, mi quis scelerisque sollicitudin, elit ligula varius eros, ut eleifend arcu tortor non libero. Vivamus consequat elit eu lacus convallis molestie. Aliquam eu mi vel est aliquet luctus. Nam malesuada ex et venenatis aliquam. Mauris dignissim convallis tellus, at vehicula lacus facilisis non. Suspendisse hendrerit mollis orci, nec ultrices neque semper ut. Integer fringilla nibh nec mattis facilisis.

      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur odio sed luctus rhoncus. Pellentesque nisl tortor, iaculis id vulputate eget, auctor at turpis. Maecenas cursus euismod magna. Curabitur egestas dictum vehicula. Integer lobortis, massa ut ornare efficitur, nunc est suscipit nisl, eu vulputate dui diam bibendum enim. Nullam rutrum neque mollis enim tempus, in iaculis elit condimentum. Sed molestie aliquam dui et tincidunt. Nulla vel consectetur augue. Sed purus augue, imperdiet quis porttitor vitae, varius ac tortor. Fusce lacinia, mi non egestas hendrerit, tellus urna auctor nulla, at faucibus lectus risus non leo. Cras commodo purus commodo posuere facilisis. Etiam porta vulputate orci, non condimentum lorem lobortis eu. Aenean molestie justo a sem sagittis, quis egestas felis semper. Phasellus pharetra vestibulum eros sed commodo. Sed tincidunt accumsan est.

      Curabitur nibh massa, viverra a mauris id, placerat ullamcorper diam. Morbi auctor diam magna, nec cursus nisl suscipit semper. Sed volutpat augue sit amet felis scelerisque, ac imperdiet arcu commodo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec ac elementum urna, efficitur faucibus enim. Phasellus congue urna ac sollicitudin ornare. Quisque semper at enim ultricies consectetur. Aliquam metus purus, viverra vitae congue sit amet, laoreet vitae magna. Praesent venenatis tincidunt neque, quis lacinia quam placerat id. Nullam interdum, velit facilisis tincidunt laoreet, magna risus mollis elit, nec malesuada erat nisl sed tellus. Vivamus fermentum lectus porttitor, eleifend sem eget, lobortis sem. Sed imperdiet risus a elementum venenatis. Aliquam gravida at ante vel imperdiet. Donec feugiat metus ac magna fermentum blandit eu non leo.

      Nullam a metus nec augue finibus consequat. Praesent bibendum tempor mi, pretium faucibus nunc elementum quis. Ut eleifend diam non pulvinar venenatis. Aenean risus lacus, congue ac justo at, dapibus consectetur est. Vestibulum vel mattis ipsum. Quisque consequat dolor eu lorem efficitur, et ornare nisi maximus. Ut ac quam sem. Praesent a nisl enim. Pellentesque orci neque, finibus sed aliquam vel, ullamcorper vel nibh. Nulla nunc lectus, tincidunt id vehicula nec, auctor tristique lorem. Ut ultricies felis at arcu interdum, non varius dui blandit.

      Proin sed volutpat nunc. Praesent dictum erat urna, sit amet facilisis erat aliquam a. Phasellus posuere mauris quis mi faucibus auctor. Donec pellentesque ut sapien eget condimentum. Phasellus neque velit, sodales ut libero sit amet, facilisis cursus leo. Integer consequat sapien in tristique semper. Etiam porttitor sodales quam sit amet sagittis. Nunc egestas, massa tempor facilisis faucibus, augue lectus bibendum turpis, ac vestibulum lectus dolor et arcu. Mauris fermentum lobortis eros, a aliquet urna mollis sit amet.
      
    </p>
  </Layout>
)

export default IndexPage
