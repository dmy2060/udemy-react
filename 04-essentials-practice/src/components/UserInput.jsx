export default function UserInput({ number, onChangeNumber }) {
  return (
    <section id='user-input'>
      <div className='input-group'>
        <div>
          <label htmlFor=''>INITAL INVESTMENT</label>
          <input
            type='number'
            name='INITALINVESTMENT'
            value={number.INITALINVESTMENT}
            onChange={onChangeNumber}
          />
        </div>
        <div>
          <label htmlFor=''>ANINUAL INVESTMENT</label>
          <input
            type='number'
            name='ANINUALINVESTMENT'
            value={number.ANINUALINVESTMENT}
            onChange={onChangeNumber}
          />
        </div>
      </div>
      <div className='input-group'>
        <div>
          <label htmlFor=''>EXPECTED RETURN</label>
          <input
            type='number'
            name='EXPECTEDRETURN'
            value={number.EXPECTEDRETURN}
            onChange={onChangeNumber}
          />
        </div>
        <div>
          <label htmlFor=''>DURATION</label>
          <input
            type='number'
            name='DURATION'
            value={number.DURATION}
            onChange={onChangeNumber}
          />
        </div>
      </div>
    </section>
  );
}
