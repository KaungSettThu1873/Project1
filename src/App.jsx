/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-distracting-elements */

import './App.css';

function App() {
  return (
    <div className='bg-darkblue'>
       <div class="container-lg">
        <div class="pt-lg-5 mt-md-4 pt-sm-2 pt-2 d-flex justify-content-center">
            <div>
                <img src="images/logo rgb no bg.png" class=" rounded-circle logoSize" alt='...'  />
            </div>
        </div>
        <h5 class="text-white fw-bold text-center font">Min Thar Gyi</h5>
        <div class="col-lg-6 offset-lg-3 mt-lg-4 mt-md-4 mt-sm-3 mt-3">
                <div class="row ms-lg-5 ms-md-5 ms-sm-3 ms-2">
                    <div class="col-lg-4 offset-lg-1 col-md-4 offset-md-1 col-sm-4 offset-sm-1 col-4 offset-1">
                       <button class="btn btn-light w-100 font fw-bold">
                            <a href="#" class="text-decoration-none text-dark">Register</a>
                       </button>
                    </div>
                    <div class="col-lg-4 offset-lg-1 col-md-4 offset-md-1 col-sm-4 offset-sm-1 col-4 offset-1">
                        <button class="btn btn-light w-100 font fw-bold ">
                            <a href="#"  class="text-decoration-none text-dark">Login</a>
                       </button>
                    </div>
                </div>
        </div>
        <div class="col-lg-6 offset-lg-3 mt-lg-4 mt-md-4 mt-sm-3 mt-3 ">
            <marquee class="text-white font font3 ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt doloremque reprehenderit inv</marquee>
        </div>
        <div class="col-lg-6 offset-lg-3 mt-lg-3 mt-md-3 mt-sm-2 mt-2">
            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="6000">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="/images/1920x660.jpg" class="d-block w-100" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src="/images/AYA-PAY.jpg" class="d-block w-100" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src="/images/Daily-5-Times-1-Chancs-Myan.jpg" class="d-block w-100" alt="..." />
                  </div>
                </div>
                <button class="carousel-control-prev d-none"  type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next d-none"  type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        <div class="col-lg-6 offset-lg-3 mt-lg-4 mt-md-4 mt-sm-3 mt-3">
            <h6 class="text-white fw-bold text-center font">You Can Download</h6>
            <div class="d-flex justify-content-center text-white mt-lg-4 mt-md-4 mt-sm-3 mt-3 ">
                <div class="me-2">
                        <a href="">
                            <img src="/images/FYeWLpKTZJc.png" />
                        </a>
                </div>
                <div>
                    <a href="">
                        <img src="/images/E0Xmh71WBR7.png" />
                    </a>
                </div>
            </div>
        </div>
        <div class="col-lg-6 col-md-6 offset-lg-3 offset-md-3 mt-lg-4 mt-md-4 mt-sm-3 mt-3">
            <h6 class="text-white fw-bold text-center font">Contacts</h6>
            <div class=" text-center text-white mt-lg-4 mt-md-4 mt-sm-3 mt-3 ">
                <button class="bg-btn1  mb-4 pt-3 pb-3">
                   <a href="#" class="text-white font text-decoration-none p-1">Line မှ ဆက်သွယ်ရန်။</a>
                </button>
                <button class="bg-btn1 mb-4 pt-3 pb-3">
                    <a href="#" class="text-white font text-decoration-none p-1">FaceBook မှ ဆက်သွယ်ရန်။</a>
                 </button>
                 <button class="bg-btn1 mb-4 pt-3 pb-3">
                    <a href="#" class="text-white font text-decoration-none p-1">Telegram မှ ဆက်သွယ်ရန်။</a>
                 </button>
            </div>
        </div>

        <div class="col-lg-6 col-md-6 offset-lg-3 offset-md-3 mt-lg-1 mt-md-1 mt-sm-0 mt-0 mb-lg-4 mb-md-3 mb-sm-3 mb-3">
           
            <video src="video1.mp4" controls class="w-100"></video>
        </div>
        <div class="col-lg-6 col-md-6 offset-lg-3 text-center offset-md-3 mb-2">
            <small class="text-white font font2">Copyright 2024 @ by </small>
            <small class="font font2 font2Color">Delight Myanmar Web Team </small>
        </div>
    </div>
    </div>
   
  
  );
}

export default App;
