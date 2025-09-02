import React from 'react'
import { UmukoziLogo } from './ui/umukozi-logo'

export const BrandTest: React.FC = () => {
  return (
    <div className="p-8 space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">UmukoziHR Brand Assets Test</h2>
        
        {/* Logo Test */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Logo Component</h3>
          <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded">
            <UmukoziLogo />
            <UmukoziLogo width={100} height={30} />
            <UmukoziLogo width={200} height={60} />
          </div>
        </div>
        
        {/* Color System Test */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Brand Colors</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <div className="w-full h-16 bg-umukozi-orange rounded"></div>
              <p className="text-sm">Orange Primary</p>
              <code className="text-xs">#FF7A00</code>
            </div>
            <div className="space-y-2">
              <div className="w-full h-16 bg-umukozi-orange-light rounded"></div>
              <p className="text-sm">Orange Light</p>
              <code className="text-xs">#FFB366</code>
            </div>
            <div className="space-y-2">
              <div className="w-full h-16 bg-umukozi-teal rounded"></div>
              <p className="text-sm">Teal Primary</p>
              <code className="text-xs">#1E5A5A</code>
            </div>
            <div className="space-y-2">
              <div className="w-full h-16 bg-umukozi-teal-light rounded"></div>
              <p className="text-sm">Teal Light</p>
              <code className="text-xs">#4A8B8B</code>
            </div>
          </div>
        </div>
        
        {/* Gradient Test */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Brand Gradients</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <div className="w-full h-16 bg-umukozi-gradient-hero rounded"></div>
              <p className="text-sm">Hero Gradient</p>
            </div>
            <div className="space-y-2">
              <div className="w-full h-16 bg-umukozi-gradient-cards rounded"></div>
              <p className="text-sm">Cards Gradient</p>
            </div>
            <div className="space-y-2">
              <div className="w-full h-16 bg-umukozi-gradient-subtle rounded"></div>
              <p className="text-sm">Subtle Gradient</p>
            </div>
          </div>
        </div>
        
        {/* Interactive Elements Test */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Interactive Elements</h3>
          <div className="flex space-x-4">
            <button className="px-4 py-2 bg-umukozi-orange text-white rounded hover:bg-umukozi-orange-light transition-colors">
              Primary Button
            </button>
            <button className="px-4 py-2 border-2 border-umukozi-teal text-umukozi-teal rounded hover:bg-umukozi-teal hover:text-white transition-colors">
              Secondary Button
            </button>
            <button className="px-4 py-2 bg-umukozi-gradient-cards text-white rounded">
              Gradient Button
            </button>
          </div>
        </div>
        
        {/* Text Colors Test */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Text Colors</h3>
          <div className="space-y-1">
            <p className="text-umukozi-orange">Orange text color</p>
            <p className="text-umukozi-teal">Teal text color</p>
            <p className="text-umukozi-orange-light">Light orange text color</p>
            <p className="text-umukozi-teal-light">Light teal text color</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BrandTest