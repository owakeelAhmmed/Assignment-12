import React from 'react';

const ProvideGear = () => {
  return (
    <div>
      <div className="card mb-3 mt-16 lg:card-side bg-primary shadow-xl">
            
            <div className="card-body">
              <h2 className="card-title">New album is released!</h2>
              <p>Click the button to listen on Spotiwhy app.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-secondary">Listen</button>
              </div>
            </div>
          </div>
    </div>
  );
};

export default ProvideGear;