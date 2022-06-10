
import './App.css';

function App() {
  return (
    <>
      <div className='main_header'>
        <div className='logo'>
          <img className='logo' src="\images\logo.png" alt="logo" />
        </div>
        <div className='header1'>
          <span className='college_name' ><strong>Daulat Ram College, University of Delhi</strong></span >
          <div className='header2'>
            Star College, <strong>Estb. 1960 </strong>
          </div>
          <div className='header3'>
            NIRF RANK: 26 | NAAC GRADE 'A' |  INDIA TODAY RANK (SCIENCE:7 COMMERCE:13 HUMANITIES:15 ) | DBT STAR COLLEGE
          </div>
        </div>

        <div className='icons'>
          <span className='facebook'>
            <a href="https://www.facebook.com/DRC1960">
              <i className='fa fa-facebook'></i>
            </a>
          </span>
          <span className='twitter'>
            <a href="https://twitter.com/drc_du">
              <i className='fa fa-twitter'></i>
            </a>
          </span>
          <span className='linkedin'>
            <a href="https://www.dr.du.ac.in/magic-lantern-film-society-society.php#" target="_blank">
              <i className='fa fa-linkedin'></i>
            </a>
          </span>
          <span className='instagram'>
            <a href="https://www.instagram.com/daulat_ram_college_/?hl=en">
              <i class="fa fa-instagram" ></i>
            </a>
          </span>

        </div>


      </div>
    </>
  );
}

export default App;
