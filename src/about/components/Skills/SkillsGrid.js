import React from 'react';
import styles from './SkillsGrid.module.scss'
import { CSSGrid, measureItems, makeResponsive, layout } from 'react-stonecutter';

const Grid = makeResponsive(measureItems(CSSGrid), {
  maxWidth: 1920,
  minPadding: 100
});

const SkillsGrid = () => {
  return(
      <div>
        <CSSGrid
          component="ul"
          columns={5}
          columnWidth={150}
          gutterWidth={5}
          gutterHeight={5}
          layout={layout.pinterest}
          duration={800}
          easing="cubicOut"
          >
          <li key="A" itemHeight={150}>A</li>
          <li key="B" itemHeight={120}>B</li>
          <li key="C" itemHeight={170}>C</li>
        </CSSGrid>
      </div>
      )
};

export default SkillsGrid;