import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function PatternAuth() {
  const [selectedBoxes, setSelectedBoxes] = useState<number[]>([]);
  const [error, setError] = useState('');
  const correctPattern = [1, 4, 7, 8, 9]; // L-shape from top-left down and right

  useEffect(() => {
    // Check if already authenticated
    const isAuth = sessionStorage.getItem('isAuthenticated');
    if (isAuth === 'true') {
      document.getElementById('authScreen')?.classList.add('hidden');
    }
  }, []);

  const handleBoxClick = (boxNumber: number) => {
    setError('');
    setSelectedBoxes(prev => {
      // If box already selected, do nothing
      if (prev.includes(boxNumber)) return prev;
      
      const newSelection = [...prev, boxNumber];
      
      // Check pattern when 5 boxes are selected
      if (newSelection.length === 5) {
        if (arraysEqual(newSelection, correctPattern)) {
          sessionStorage.setItem('isAuthenticated', 'true');
          document.getElementById('authScreen')?.classList.add('hidden');
        } else {
          setError('Incorrect pattern. Please try again.');
          setTimeout(() => setError(''), 2000);
          return [];
        }
      }
      
      return newSelection;
    });
  };

  const arraysEqual = (arr1: number[], arr2: number[]) => {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false;
    }
    return true;
  };

  return (
    <div id="authScreen" className="fixed inset-0 bg-royal/95 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md mx-auto p-8 rounded-lg bg-white/10 backdrop-blur-md"
      >
        <h2 className="text-3xl font-cursive text-center text-white mb-6">
          Welcome to Ifeoma's Garden
        </h2>
        
        <p className="text-white/80 text-center mb-6">
          Please draw the pattern to enter
        </p>

        <div className="grid grid-cols-3 gap-4 max-w-[240px] mx-auto mb-6">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((boxNumber) => (
            <button
              key={boxNumber}
              onClick={() => handleBoxClick(boxNumber)}
              className={`w-16 h-16 rounded-lg transition-all duration-300 ${
                selectedBoxes.includes(boxNumber)
                  ? 'bg-coral text-white'
                  : 'bg-white/10 hover:bg-white/20'
              }`}
            />
          ))}
        </div>

        {error && (
          <p className="text-coral text-center">{error}</p>
        )}
      </motion.div>
    </div>
  );
}