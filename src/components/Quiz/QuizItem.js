import React from 'react';

export default function QuizItem({id, q, answers, n, nTotal, onItemCallback}) {
  return (
    <div className='border border-light p-3 mb-3 rounded shadow' style={{maxWidth: '650px'}}>
      <div className="d-flex flex-row question-title">
        <h5 className="mt-1 ml-1 fs-6 text-left">{n}. {q}</h5>
      </div>
      {answers.map(el => (
        <div className="ans ml-2 d-flex mt-2">
          <label className="radio">
            <input type="radio" name={el.form} value={el.action} onChange={() =>  onItemCallback({action: el.action, form: el.form})}/> <span className='fs-6'>{el.text}</span>
          </label>
        </div>
      ))}
    </div>
  )
}