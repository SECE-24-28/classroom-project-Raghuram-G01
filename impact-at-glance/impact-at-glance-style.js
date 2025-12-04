import styled from "styled-components";
export const ImpactAtGlanceStyle = styled.div`
      position: relative;
    overflow: hidden;
    padding: 3rem 0px;
    top: 0;
    //     box-sizing: border-box;
    // margin: 10px ;
    // padding: 10 px;

  .title {
    font-size: 40px;
    font-weight: 600;
    text-align: center;
    font-family: Inter, sans-serif;
    margin-bottom: 2rem;
  }

  .title span {
    color: #ff3b5c;
  }

.grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;   
  gap: 30px;                 
  max-width: 1100px;
  margin: 0 auto;
}


  .card {
   display: flex;
    flex-wrap: wrap;
    gap: 25px;
    -webkit-box-pack: center;
    justify-content: center;

  }

  .pink { 
  position: relative;
    width: 450px;
    display: flex;
    padding: 1rem 1rem 0px;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    border-radius: 12px;
    font-family: Inter, sans-serif;
    overflow: visible;
    z-index: 1;
    background: #ffd6db; }
  .blue { 
  position: relative;
    width: 450px;
    display: flex;
    padding: 1rem 1rem 0px;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    border-radius: 12px;
    font-family: Inter, sans-serif;
    overflow: visible;
    z-index: 1; 
  background: #d8eaff; }
  .green { 
  position: relative;
    width: 450px;
    display: flex;
    padding: 1rem 1rem 0px;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    border-radius: 12px;
    font-family: Inter, sans-serif;
    overflow: visible;
    z-index: 1;
  background: #dfffe9; }
  .yellow { 
  position: relative;
    width: 450px;
    display: flex;
    padding: 1rem 1rem 0px;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    border-radius: 12px;
    font-family: Inter, sans-serif;
    overflow: visible;
    z-index: 1;
  background: #ffe8c5; }

.decorative-image-1 {
           position: absolute;
    top: 50px;
    left: -80px;
    down: 100px;
    width: 500px;
    z-index: 0;
}
.label {
 box-sizing: border-box;
    margin: 0;
    padding: 0;
        font-size: 18px;
    font-weight: 500;
    margin-bottom: 5px;
    color: rgb(51, 65, 85);
    // box-sizing: border-box;
    // margin: 0;
    // padding: 0;

}
  .value {
    font-size: 24px;
    font-weight: 700;
    margin: 0px;
    padding-bottom: 20px;
    color: rgb(0, 0, 0);
  }

  img {
        position: absolute;
    bottom: -25px;
    right: 20px;
    height: 120px;
    width: auto;
    object-fit: contain;
    z-index: 2;
  }

  @media (max-width: 920px) {
    .grid {
      flex-direction: column;
      align-items: center;
    }

    // .card {
    //   width: 100%;   /* full width */
    //   max-width: 500px;
    // }
  }
`;
