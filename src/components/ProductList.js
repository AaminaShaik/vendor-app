import React from 'react';
import ProductDetails from './ProductDetails';


const sampleProducts = [
  { 
    id: 1, 
    name: 'W for Woman Floral', 
    description: "Calf Length Cotton Woven Women's Kurta Pant Dupatta Set", 
    price: 1580, 
    image: 'https://m.media-amazon.com/images/I/71Yr4olSI4L._AC_UL480_FMwebp_QL65_.jpg' 
  },
  { 
    id: 2, 
    name: 'Upgraded Shoe Rack', 
    description: "Shoe Rack with Dustproof Door for Heels/Slippers/Boots, 12-layer Shoe Storage Cabinet", 
    price: 2400, 
    image: 'https://m.media-amazon.com/images/I/61BcP-wZ3DL._AC_UL480_FMwebp_QL65_.jpg' 
  },
  { 
    id: 3, 
    name: 'Miraggio Tokyo', 
    description: 'Miraggio Tokyo Handbag for Women with Adjustable and Detachable Sling Strap', 
    price: 2659, 
    image: 'https://m.media-amazon.com/images/I/71bF4sSb3WL._SY675_.jpg' 
  },
  { 
    id: 4, 
    name: 'Marc Loire', 
    description: "Marc Loire Women Smart Casual Platform Heels Fashion Sandal", 
    price: 2100, 
    image: 'https://images-eu.ssl-images-amazon.com/images/I/61jaGv7IykL._AC_SR370,420,0,B_BR3_.jpg' 
  },
  { 
    id: 5, 
    name: 'Wakefit 100% Waterproof Premium Cotton Mattress Protector | Breathable', 
    description: 'Hypoallergenic Ultra Soft Fitted Bed Protector 78"x72" - King, Grey', 
    price: 1200, 
    image: 'https://m.media-amazon.com/images/I/61sRf7oDELL._SX679_.jpg' 
  },
  { 
    id: 6, 
    name: 'Homehop Solar Light Outdoor Decorative Meteor Shower String Lamp', 
    description: 'Lamp 144 LED Waterproof for Home, Wall, Garden, Balcony, and Tree', 
    price: 400, 
    image: 'https://m.media-amazon.com/images/I/61rp4vuoYnL._SX300_SY300_QL70_FMwebp_.jpg' 
  }, 
  { 
    id: 7, 
    name: 'Adjustable Electric Standing Desk', 
    description: 'Sunon Ergonomic Height-Adjustable Electric Standing Desk with One-Year Warranty - Sit & Stand Desk with 4 Memory Presets', 
    price: 22200, 
    image: 'https://m.media-amazon.com/images/I/61DdSM4QsAL._AC_UL480_FMwebp_QL65_.jpg' 
  },
  { 
    id: 8, 
    name: 'bilbil 63 x 30 Inches Electric Standing Desk', 
    description: 'Electric Standing Desk, Height Adjustable Sit Stand Table with Splice Board, Stand up Home Office Desk', 
    price: 26500, 
    image: 'https://m.media-amazon.com/images/I/41JUO-6CdfL._SX300_SY300_QL70_FMwebp_.jpg' // Replace with actual image URL
  },
  { 
    id: 9, 
    name: 'Sunon Office Chairs', 
    description: 'Adjustable Lumbar Support Office Chair Computer Chair with Adjustable Seat Height', 
    price: 2650, 
    image: 'https://m.media-amazon.com/images/I/61KO5JCyqqL._AC_UL480_FMwebp_QL65_.jpg' // Replace with actual image URL
  }
];

function ProductList({ setPage, setSelectedProduct }) {
  return (
    <div className="container mt-4">
      <h2>Products</h2>
      <div className="row">
        {sampleProducts.map((product) => (
          <div className="col-md-4" key={product.id}>
            <div className="card mb-4">
              <img 
                src={product.image} 
                className="card-img-top" 
                alt={product.name} 
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text"><strong>${product.price}</strong></p>
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    setSelectedProduct(product);
                    setPage('product');
                  }}
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
