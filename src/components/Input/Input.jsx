import React from 'react';
import './Input.css';
import { BaseComponent } from '../common/BaseComponent';
import { SectionHeader, Button, TextArea } from '../common/CommonComponents';

class Input extends BaseComponent {
  render() {
    const { 
      cvText, 
      jobDescription, 
      onCvChange, 
      onJobChange, 
      onAnalyze, 
      isLoading,
      error 
    } = this.props;

    return (
      <div className="input-section">
        <div className="input-group">
          <SectionHeader>Your CV</SectionHeader>
          <TextArea
            value={cvText}
            onChange={onCvChange}
            placeholder="Paste your CV here..."
          />
        </div>
        
        <div className="input-group">
          <SectionHeader>Job Description</SectionHeader>
          <TextArea
            value={jobDescription}
            onChange={onJobChange}
            placeholder="Paste the job description here..."
          />
        </div>

        <Button 
          onClick={onAnalyze} 
          disabled={isLoading}
        >
          {isLoading ? 'Analyzing...' : 'Analyze'}
        </Button>

        {this.renderError(error)}
      </div>
    );
  }
}

export default Input;
