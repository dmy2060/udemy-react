export default function UserInput({ number, onChangeNumber }) {
  return (
    <form action='#'>
      <section id='user-input'>
        <div className='input-group'>
          <div>
            <label>INITAL INVESTMENT</label>
            <input
              type='number'
              name='initialInvestment'
              value={number.initialInvestment}
              onChange={onChangeNumber}
              required
            />
          </div>
          <div>
            <label>ANINUAL INVESTMENT</label>
            <input
              type='number'
              name='annualInvestment'
              value={number.annualInvestment}
              onChange={onChangeNumber}
              required
            />
          </div>
        </div>
        <div className='input-group'>
          <div>
            <label>EXPECTED RETURN</label>
            <input
              type='number'
              name='expectedReturn'
              value={number.expectedReturn}
              onChange={onChangeNumber}
              required
            />
          </div>
          <div>
            <label>DURATION</label>
            <input
              type='number'
              name='duration'
              value={number.duration}
              onChange={onChangeNumber}
              required
            />
          </div>
        </div>
      </section>
    </form>
  );
}

/**
 *  다른 방식
*   name='ANINUALINVESTMENT'
    value={number.ANINUALINVESTMENT}
    onChange={onChangeNumber}

    => 이런식으로 name을 선언해서 사용하는 것이 아닌 onChange={(event)=>onChangeNumber('ANINUALINVESTMENT', event.target.value) }
    이렇게 아예 보낼 때 부터 익명 함수를 통해 이벤트를 전달시켜 받아서 사용해도 됨.
 *
 */
