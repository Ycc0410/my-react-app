import React, { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState<number>(0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const comment = (e.currentTarget.elements[0] as HTMLInputElement).value;
    console.log('评论已提交:', comment);
  };

  return (
      <>
      <header className="profile-header">
        <h1>CHEN YI CHEN</h1>
        <h2>淡江大學資訊管理系</h2>
      </header>

      <main className="grid-container">
        <section className="card skills-section">
          <h4>興趣</h4>
          <ul>
            <li>看書</li>
            <li>聽音樂</li>
          </ul>
        </section>

        <section className="card contact-section">
          <h4>聯絡方式</h4>
          <ul>
            <li><strong>Line ID:</strong> 410630908</li>
            <li><strong>Email:</strong> 410630908@gms.tku.edu.tw</li>
          </ul>
        </section>

        <section className="card experience-section">
          <h4>經歷</h4>
          <ul>
            <li><em>2022-2023</em> <strong>大學一年級</strong>
              <ol>
                <li>證卷研究社</li>
              </ol>
            </li>
            <li><em>2023-2024</em> <strong>大學二年級</strong>
              <ol>
                <li>參加統一綜合證卷、元大股市模擬競賽第三名</li>
              </ol>
            </li>
            <li><em>2024-2025</em> <strong>大學三年級</strong>
              <ol>
                <li>專題製作</li>
              </ol>
            </li>
          </ul>
        </section>

        <section className="card certification-section">
          <h4>校徽</h4>
          <div className="cert-item">
            <img width="150" src="https://about.tku.edu.tw/images/slider-tkulogox.png" alt="Tamkang University Logo" />
          </div>
        </section>

        <section className="card cert-info-section">
          <h4>未來目標</h4>
          <table>
            <thead>
              <tr>
                <th>目標</th>
                <th>資訊</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Durham University Master</td>
                <td><a href="https://www.durham.ac.uk/">檢視資訊</a></td>
              </tr>
              <tr>
                <td>IELTS for UKVI 7.0</td>
                <td><a href="https://ielts.org/">檢視資訊</a></td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="card comments-section">
          <h4>其他</h4>
          <form onSubmit={handleSubmit}>
            <label htmlFor="comment">發送留言:</label>
            <input type="text" id="comment" name="comment" placeholder="輸入留言" required />
            <button type="submit" className="btn">提交</button>
          </form>
        </section>
      </main>
  </>)
}

export default App

