import React from 'react';
import ScoreDisplay from './ScoreDisplay';
import AnalysisComparison from './AnalysisComparison';

const Analysis = ({ score, justification, cvText, jobDescription }) => {
  return (
    <div className="analysis-section">
      <div className="main-score-container">
        <ScoreDisplay score={score} label="Overall Match" />
      </div>
      <div className="analysis-content">
        <h2 className="section-header">Analysis</h2>
        <div className="justification">
          {justification || 'Run analysis to see results'}
        </div>
        <AnalysisComparison cvText={cvText} jobDescription={jobDescription} />
      </div>
    </div>
  );
};

export default Analysis;
