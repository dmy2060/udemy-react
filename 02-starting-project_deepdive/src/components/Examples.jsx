import { useState } from 'react';
import { EXAMPLES } from '../data.js';
import Tabs from '../components/Tabs.jsx';
import TabButton from '../components/TabButton.jsx';
import Section from '../components/Section.jsx';

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState('');

  function handleClick(selectedButton) {
    // selectedButton => 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }

  let tabContent = <p>Please select a topic</p>;
  if (selectedTopic) {
    tabContent = (
      <div id='tab-content'>
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <Section id='examples' title='Examples'>
      <Tabs
        ButtonContainer='menu'
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic == 'components'}
              onClick={() => handleClick('components')}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic == 'jsx'}
              onClick={() => handleClick('jsx')}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic == 'props'}
              onClick={() => handleClick('props')}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic == 'state'}
              onClick={() => handleClick('state')}
            >
              State
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}
