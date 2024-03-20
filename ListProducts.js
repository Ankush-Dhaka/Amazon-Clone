import Products from "../Products/Products";

const ListProducts= ()=>{
  return(
    <>
          {/*Home Row*/}
          <div className="HomeRow">
                <Products 
                title="FitBit Watch"
                price={2000}
                image="https://m.media-amazon.com/images/I/6152wS4BKxL._AC_UF1000,1000_QL80_.jpg"/>
                <Products 
                title="Mobile"
                price={20000}
                image="https://images.pexels.com/photos/1786433/pexels-photo-1786433.jpeg?cs=srgb&dl=pexels-hammad-khalid-1786433.jpg&fm=jpg"/>
                <Products 
                title="FitBit Watch"
                price={5000}
                image="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg"/>
                <Products 
                title="Mobile"
                price={30000}
                image="https://img.freepik.com/premium-photo/person-holding-cell-phone-their-hand-generative-ai-image_97070-8366.jpg"/>
                
               </div>
               {/*second row */}
               <div className="HomeRow">
                <Products 
                title="FitBit Watch"
                price={10000}
                image="https://thumbs.dreamstime.com/b/mont-black-automatic-watches-black-clear-background-nthe-rolex-oyster-perpetual-datejust-certified-self-winding-106381032.jpg"/>
                <Products 
                title="Shirts"
                price={2000}
                image="https://assets.ajio.com/medias/sys_master/root/20231205/G3z0/656ed440ddf7791519b1e6e2/-473Wx593H-461119105-blue-MODEL.jpg"/>
                   <Products 
                title="Shoes"
                price={6000}
                image="https://www.shutterstock.com/image-photo/pair-pink-sport-shoes-on-260nw-228691018.jpg"/>
                <Products 
                title="Shirts"
                price={5000}
                image="https://5.imimg.com/data5/HG/WB/MY-49540151/men-casual-shirt-500x500.png"/>
                
               </div>
               {/*third row */}
               <div className="HomeRow">
                <Products 
                title="Sandals"
                price={3000}
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIgjQ9tR4dCMYwTM-Y3E4kLnMsprSjQwpsI1mBLRRPBOPa48WEq8cJ8iDsD2YOhjnSuCg&usqp=CAU"/>
                <Products 
                title="FitBit Watch"
                price={2000}
                image="https://m.media-amazon.com/images/I/6152wS4BKxL._AC_UF1000,1000_QL80_.jpg"/>
                   <Products 
                title="Pants"
                price={7000}
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbEQxgmzsu_Oa_9J4I5dpgnGjnSbRrKvc_G3lRmBqtADw47lTUkWzA3T6ERUta6E6LvC4&usqp=CAU"/>
                <Products 
                title="Sandles"
                price={8000}
                image="https://rukminim2.flixcart.com/image/400/450/xif0q/sandal/u/7/h/6-sl836fashionflats-39-shoestail-peach-original-imagah2hjqk7tqdg-bb.jpeg?q=90&crop=false"/>
                
               </div>
               {/*Forth row */}
               <div className="HomeRow">
                <Products 
                title="Sandals"
                price={7000}
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwV4BKLklFZXwauaHJJ16p5TZ_I1ObCKgptDKrJ0lejQ1R9VXEdUeuklHwbmrYAKM36r0&usqp=CAU"/>
                <Products 
                title="Coat"
                price={15000}
                image="https://5.imimg.com/data5/FN/OU/MY-2825908/ladies-coat.jpg"/>
                   <Products 
                title="Coat"
                price={13000}
                image="https://ae01.alicdn.com/kf/HTB1QshdbzDuK1Rjy1zjq6zraFXaZ.jpg_q50.jpg"/>
                <Products 
                title="Coat"
                price={17000}
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWGHcZGk7k9LmJ--DvkDPeArIFwR-VyR01PiKJlQnSlvULksWMovjkDvTY6XuXG_WBlFQ&usqp=CAU"/>
                
               </div>
    </>
  )
}
export default ListProducts;