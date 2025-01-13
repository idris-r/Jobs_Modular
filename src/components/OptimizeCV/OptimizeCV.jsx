import React from 'react';
import './OptimizeCV.css';
import { BaseComponent } from '../common/BaseComponent';
import { Button, TextArea } from '../common/CommonComponents';
import { saveAsPDF, saveAsDOC } from '../../utils/fileSaver';

class OptimizeCV extends BaseComponent {
  saveDocument = (type) => {
    const { optimizedCV } = this.props;
    if (!optimizedCV) return;
    type === 'pdf' ? saveAsPDF(optimizedCV) : saveAsDOC(optimizedCV);
  };

  render() {
    const { optimizedCV, onOptimize, isLoading, error } = this.props;

    return (
      <div className="optimize-section">
        <Button 
          onClick={onOptimize} 
          disabled={isLoading}
        >
          {isLoading ? 'Optimizing...' : 'Optimize CV'}
        </Button>

        {optimizedCV && (
          <>
            <TextArea value={optimizedCV} readOnly rows={12} />
            <div className="save-buttons">
              <Button onClick={() => this.saveDocument('pdf')}>
                Save as PDF
              </Button>
              <Button onClick={() => this.saveDocument('doc')}>
                Save as DOC
              </Button>
            </div>
          </>
        )}

        {this.renderError(error)}
      </div>
    );
  }
}

export default OptimizeCV;
