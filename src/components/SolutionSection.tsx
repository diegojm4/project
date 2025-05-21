import React from 'react';

const SolutionSection: React.FC = () => {
  return (
    <section id="solution" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Solution</h2>
        <h3 className="text-xl md:text-2xl font-semibold mb-12 text-center text-green-600">
          ChargeDock: A Timely Solution
        </h3>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 mb-6">
              ChargeDock provides the essential infrastructure to support the accelerating adoption of personal 
              mobility devices. It is the first solution specifically engineered to securely store and charge 
              electric scooters, e-bikes, and other micromobility vehicles — solving critical safety and access issues.
            </p>
            
            <p className="text-lg text-gray-700">
              ChargeDock stations are modular, solar-powered units designed to operate off-grid and charge EPAMDs 
              securely using fire-safe compartments and a smart locking system.
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="grid grid-cols-3 gap-8 max-w-md">
              <div className="flex flex-col items-center">
                <img 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'%3E%3Cpath d='M270 150c0 10-30 30-60 30s-60-20-60-30 30-30 60-30 60 20 60 30zm-120 0c0 10-30 30-60 30s-60-20-60-30 30-30 60-30 60 20 60 30z' fill='%2310b981'/%3E%3C/svg%3E"
                  alt="Electric Scooter"
                  className="h-20 w-20 mb-3"
                />
                <span className="text-sm font-medium text-gray-700">E-Scooter</span>
              </div>
              
              <div className="flex flex-col items-center">
                <img 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'%3E%3Cpath d='M150 50v200M75 150h150M150 50l75 100M150 50l-75 100' stroke='%2310b981' stroke-width='20' fill='none'/%3E%3C/svg%3E"
                  alt="Charging Station"
                  className="h-20 w-20 mb-3"
                />
                <span className="text-sm font-medium text-gray-700">ChargeDock</span>
              </div>
              
              <div className="flex flex-col items-center">
                <img 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'%3E%3Cpath d='M50 150c0-55.228 44.772-100 100-100s100 44.772 100 100-44.772 100-100 100S50 205.228 50 150zm100 0h100M150 50v200' stroke='%2310b981' stroke-width='20' fill='none'/%3E%3C/svg%3E"
                  alt="E-Bike"
                  className="h-20 w-20 mb-3"
                />
                <span className="text-sm font-medium text-gray-700">E-Bike</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;