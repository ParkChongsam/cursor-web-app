'use client'

import React, { useState } from 'react'
import { MessageSquare, Code } from 'lucide-react'

const EditorPreview = () => {
  const [activeTab, setActiveTab] = useState<'chat' | 'composer'>('chat')

  return (
    <section className="w-full max-w-5xl mx-auto px-8 py-12">
      <div className="bg-[#1E1E1E] rounded-lg overflow-hidden shadow-xl">
        {/* Editor Header */}
        <div className="bg-[#2D2D2D] p-4 flex items-center justify-between">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="flex space-x-4">
            <button
              onClick={() => setActiveTab('chat')}
              className={`flex items-center space-x-2 px-4 py-2 rounded ${
                activeTab === 'chat'
                  ? 'bg-[#3D3D3D] text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <MessageSquare size={18} />
              <span>CHAT</span>
            </button>
            <button
              onClick={() => setActiveTab('composer')}
              className={`flex items-center space-x-2 px-4 py-2 rounded ${
                activeTab === 'composer'
                  ? 'bg-[#3D3D3D] text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Code size={18} />
              <span>COMPOSER</span>
            </button>
          </div>
        </div>

        {/* Editor Content */}
        <div className="p-6 text-gray-300">
          {activeTab === 'chat' ? (
            <div className="space-y-4">
              <div className="bg-[#2D2D2D] p-4 rounded">
                How do I implement a binary search tree in Python?
              </div>
              <div className="bg-[#3D3D3D] p-4 rounded">
                Here's an example implementation of a binary search tree in Python:

                ```python
                class Node:
                    def __init__(self, value):
                        self.value = value
                        self.left = None
                        self.right = None

                class BinarySearchTree:
                    def __init__(self):
                        self.root = None
                ```
              </div>
            </div>
          ) : (
            <div className="font-mono">
              <pre>
                <code>
                  {`def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
            
    return -1`}
                </code>
              </pre>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default EditorPreview 