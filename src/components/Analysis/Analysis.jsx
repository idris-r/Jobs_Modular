import React from 'react';
import './Analysis.css';

const SectionHeader = ({ children }) => (
  <h2 className="section-header">{children}</h2>
);

const ScoreDisplay = ({ score, label }) => {
  const getScoreColor = (score) => {
    if (score === null) return '#666';
    if (score >= 80) return '#4CAF50';
    if (score >= 50) return '#FFC107';
    return '#F44336';
  };

  return (
    <div className="score-container">
      <div className="score" style={{ backgroundColor: getScoreColor(score) }}>
        {score ?? '--'}
      </div>
      {label && <div className="score-label">{label}</div>}
    </div>
  );
};

const AnalysisComparison = ({ cvText, jobDescription }) => {
  const calculateScore = (cvTerm, jdTerm) => {
    if (!cvText || !jobDescription) return null;
    const cvCount = (cvText.match(new RegExp(cvTerm, 'gi')) || []).length;
    const jdCount = (jobDescription.match(new RegExp(cvTerm, 'gi')) || []).length;
    return jdCount === 0 ? null : Math.min(100, Math.round((cvCount / jdCount) * 100));
  };

  return (
    <div className="comparison-section">
      <h3>Key Comparisons</h3>
      <div className="score-grid">
        <ScoreDisplay 
          score={calculateScore('education', 'education')} 
          label="Education" 
        />
        <ScoreDisplay 
          score={calculateScore('experience', 'experience')} 
          label="Experience" 
        />
        <ScoreDisplay 
          score={calculateScore('skill', 'skill')} 
          label="Skills" 
        />
      </div>
    </div>
  );
};

export const Analysis = ({ score, justification, cvText, jobDescription }) => {
  return (
    <div className="analysis-section">
      <div className="main-score-container">
        <ScoreDisplay score={score} label="Overall Match" />
      </div>
      <div className="analysis-content">
        <SectionHeader>Analysis</SectionHeader>
        <div className="justification">
          {justification || 'Run analysis to see results'}
        </div>
        <AnalysisComparison cvText={cvText} jobDescription={jobDescription} />
      </div>
    </div>
  );
};
