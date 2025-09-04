import { Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import EternellesPage from './Page/EternellesPage.jsx';
import ProfilePage from './Page/ProfilePage.jsx';
import ProfileClientPage from './Page/ProfileClientPage.jsx';
// import AjoutArticlePage from './page/AjoutArticlePage.jsx';
// import GaleriePage from './page/GaleriePage.jsx';






function app() {

  return (

    <>
      <Router>

        <Routes>

          <Route path='/Eternelles' element={< EternellesPage />} />
          {/* <Route path='/Galerie' element={<GaleriePage />} /> */}
          <Route path='/Profile' element={<ProfilePage />} />
          <Route path='/Profile/:idClient' element={<ProfileClientPage />} />
          {/* <Route path='/AjoutArticle' element={<AjoutArticlePage />} /> */}

        </Routes>

      </Router>

    </>
  )




}

export default app;