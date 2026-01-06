import React from 'react';

const Privacy = () => {
    return (
        <div className="max-w-4xl mx-auto p-6 bg-white text-gray-800 font-sans">
            <h1 className="text-3xl font-bold mb-4">プライバシーポリシー / Privacy Policy</h1>

            <p className="font-bold mb-8">
                最終更新日: 2026年1月6日
            </p>

            <hr className="my-8 border-gray-300" />

            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">日本語版</h2>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">1. はじめに</h3>
                    <p>Cosme AI(以下「本サービス」)をご利用いただきありがとうございます。本プライバシーポリシーは、本サービスがユーザーの個人情報をどのように収集、使用、保護するかについて説明するものです。</p>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">2. 収集する情報</h3>
                    <p className="mb-4">本サービスは、以下の情報を収集します:</p>

                    <div className="mb-4">
                        <h4 className="text-lg font-bold mb-2">2.1 アカウント情報</h4>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Firebase Authenticationを通じて提供される認証情報(UID、メールアドレスなど)</li>
                            <li>言語設定(日本語 / インドネシア語)</li>
                            <li>外見設定(肌の色、目の色、髪の色、年代、ヒジャブ着用の有無など)</li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <h4 className="text-lg font-bold mb-2">2.2 コスメ情報</h4>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>ユーザーが登録した手持ちコスメの画像</li>
                            <li>コスメのカテゴリ、色味、仕上がりなどの属性情報</li>
                            <li>Google Cloud Vision APIによる画像解析結果</li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <h4 className="text-lg font-bold mb-2">2.3 利用情報</h4>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>メイク提案の履歴(気分入力、提案内容、マッチングスコア)</li>
                            <li>お気に入り登録したメイク提案</li>
                            <li>サービス利用回数(プランに応じた制限管理)</li>
                            <li>コスメ登録回数(プランに応じた制限管理)</li>
                            <li>コスメ画像解析結果(Google Cloud Vision APIによる属性抽出結果)</li>
                            <li>メイク画像生成履歴</li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <h4 className="text-lg font-bold mb-2">2.4 問い合わせ情報</h4>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>お問い合わせフォームから送信された内容(カテゴリ、メッセージ)</li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <h4 className="text-lg font-bold mb-2">2.5 支払い・サブスクリプション情報</h4>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>サブスクリプションのプラン状況(Free / Pro / Premium)</li>
                            <li>支払い履歴および請求ステータス</li>
                            <li>※クレジットカード情報は決済代行会社(Stripe)が直接管理し、本サービスでは保持しません。</li>
                        </ul>
                    </div>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">3. 情報の利用目的</h3>
                    <p className="mb-4">収集した情報は、以下の目的で利用します:</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>AIによるパーソナライズされたメイク提案の生成</li>
                        <li>手持ちコスメとの適合性分析</li>
                        <li>ユーザー体験の向上とサービス改善</li>
                        <li>利用制限の管理(不正利用の防止)</li>
                        <li>お問い合わせへの対応</li>
                        <li>サービスの運営・保守</li>
                    </ul>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">4. 情報の保存と管理</h3>

                    <div className="mb-4">
                        <h4 className="text-lg font-bold mb-2">4.1 保存場所</h4>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>ユーザーデータ: Google Cloud Firestore</li>
                            <li>画像データ: Google Cloud Storage</li>
                            <li>認証情報: Firebase Authentication</li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <h4 className="text-lg font-bold mb-2">4.2 保存期間</h4>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>アカウント情報: アカウント削除まで</li>
                            <li>コスメ画像: ユーザーが削除するまで、またはアカウント削除まで</li>
                            <li>提案履歴: アカウント削除まで</li>
                            <li>お問い合わせ履歴: アカウント削除まで</li>
                            <li>利用回数データ: 各期間終了後も履歴として保持(アカウント削除まで)</li>
                        </ul>
                    </div>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">5. 第三者サービスの利用</h3>
                    <p className="mb-4">本サービスは、以下の第三者サービスを利用しています:</p>

                    <div className="mb-4">
                        <h4 className="text-lg font-bold mb-2">5.1 Google Cloud Platform</h4>
                        <ul className="list-disc pl-6 space-y-1">
                            <li><strong> 用途 </strong>: データ保存、画像解析、AI処理</li>
                            <li><strong> 提供情報 </strong>: コスメ画像、ユーザー設定、提案履歴</li>
                            <li><strong> プライバシーポリシー </strong>: <a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a></li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <h4 className="text-lg font-bold mb-2">5.2 Firebase</h4>
                        <ul className="list-disc pl-6 space-y-1">
                            <li><strong> 用途 </strong>: ユーザー認証</li>
                            <li><strong> 提供情報 </strong>: 認証情報(メールアドレス等)</li>
                            <li><strong> プライバシーポリシー </strong>: <a href="https://firebase.google.com/support/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://firebase.google.com/support/privacy</a></li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <h4 className="text-lg font-bold mb-2">5.3 楽天API / Shopee API</h4>
                        <ul className="list-disc pl-6 space-y-1">
                            <li><strong> 用途 </strong>: おすすめコスメ商品の検索・表示</li>
                            <li><strong> 提供情報 </strong>: 検索キーワード(コスメカテゴリ、色味など)</li>
                            <li><strong> 注意 </strong>: 商品リンクをクリックした際は、各ECサイトのプライバシーポリシーが適用されます</li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <h4 className="text-lg font-bold mb-2">5.4 Google Gemini API</h4>
                        <ul className="list-disc pl-6 space-y-1">
                            <li><strong> 用途 </strong>: メイク提案の生成、商品レコメンデーション</li>
                            <li><strong> 提供情報 </strong>: ユーザーの気分入力、外見設定、手持ちコスメ情報</li>
                            <li><strong> プライバシーポリシー </strong>: <a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a></li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <h4 className="text-lg font-bold mb-2">5.5 OpenAI API</h4>
                        <ul className="list-disc pl-6 space-y-1">
                            <li><strong> 用途 </strong>: コスメマッチング処理(ベクトル埋め込み生成)</li>
                            <li><strong> 提供情報 </strong>: コスメの説明文</li>
                            <li><strong> プライバシーポリシー </strong>: <a href="https://openai.com/policies/privacy-policy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://openai.com/policies/privacy-policy</a></li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <h4 className="text-lg font-bold mb-2">5.6 Google Cloud Vision API</h4>
                        <ul className="list-disc pl-6 space-y-1">
                            <li><strong> 用途 </strong>: コスメ画像の解析・属性抽出</li>
                            <li><strong> 提供情報 </strong>: ユーザーがアップロードしたコスメ画像</li>
                            <li><strong> プライバシーポリシー </strong>: <a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a></li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <h4 className="text-lg font-bold mb-2">5.7 Google Imagen API</h4>
                        <ul className="list-disc pl-6 space-y-1">
                            <li><strong> 用途 </strong>: メイク画像の生成</li>
                            <li><strong> 提供情報 </strong>: ユーザーの外見設定、メイク提案の説明文</li>
                            <li><strong> プライバシーポリシー </strong>: <a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a></li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <h4 className="text-lg font-bold mb-2">5.8 SendGrid</h4>
                        <ul className="list-disc pl-6 space-y-1">
                            <li><strong> 用途 </strong>: お問い合わせメール通知</li>
                            <li><strong> 提供情報 </strong>: ユーザーID、お問い合わせ内容、User - Agent</li>
                            <li><strong> プライバシーポリシー </strong>: <a href="https://www.twilio.com/legal/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://www.twilio.com/legal/privacy</a></li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <h4 className="text-lg font-bold mb-2">5.9 Google Custom Search API</h4>
                        <ul className="list-disc pl-6 space-y-1">
                            <li><strong> 用途 </strong>: Shopee商品検索(インドネシア語ユーザー向け)</li>
                            <li><strong> 提供情報 </strong>: 検索キーワード</li>
                            <li><strong> プライバシーポリシー </strong>: <a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a></li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <h4 className="text-lg font-bold mb-2">5.10 Stripe</h4>
                        <ul className="list-disc pl-6 space-y-1">
                            <li><strong> 用途 </strong>: クレジットカード決済処理</li>
                            <li><strong> 提供情報 </strong>: クレジットカード情報(直接提供)、メールアドレス</li>
                            <li><strong> プライバシーポリシー </strong>: <a href="https://stripe.com/jp/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://stripe.com/jp/privacy</a></li>
                        </ul>
                    </div>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">6. 情報の共有と開示</h3>
                    <p className="mb-4">本サービスは、以下の場合を除き、ユーザーの個人情報を第三者に開示しません:</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>ユーザーの同意がある場合</li>
                        <li>法令に基づく開示が必要な場合</li>
                        <li>人の生命、身体または財産の保護のために必要な場合</li>
                        <li>サービス提供に必要な範囲で業務委託先に開示する場合(上記第三者サービス含む)</li>
                    </ul>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">7. セキュリティ</h3>
                    <p className="mb-4">本サービスは、ユーザー情報の保護のため、以下の対策を実施しています:</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Firebase Authenticationによる認証</li>
                        <li>Google Cloud Platformのセキュリティ機能の活用</li>
                        <li>アクセス制限(ユーザーは自分のデータのみアクセス可能)</li>
                        <li>通信の暗号化(HTTPS / TLS)</li>
                    </ul>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">8. ユーザーの権利</h3>
                    <p className="mb-4">ユーザーは、以下の権利を有します:</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li><strong> アクセス権 </strong>: 自分の登録情報を確認できます</li>
                        <li><strong> 修正権 </strong>: マイページから外見設定やコスメ情報を修正できます</li>
                        <li><strong> 削除権 </strong>: お問い合わせフォームから退会(データ削除)を申請できます</li>
                        <li><strong> データポータビリティ </strong>: データのエクスポートをご希望の場合は、お問い合わせください</li>
                    </ul>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">9. Cookie・ローカルストレージ</h3>
                    <p className="mb-4">本サービスは、以下の情報をブラウザのローカルストレージに保存します:</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>言語設定</li>
                        <li>お気に入り登録したメイク提案</li>
                        <li>セッション情報</li>
                    </ul>
                    <p className="mt-4">これらの情報は、ユーザーのブラウザ内にのみ保存され、サービス体験の向上のために使用されます。</p>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">10. 子どもの個人情報</h3>
                    <p>本サービスは、13歳未満の子どもから意図的に個人情報を収集しません。13歳未満の方が誤って情報を提供した場合は、速やかにお問い合わせください。</p>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">11. プライバシーポリシーの変更</h3>
                    <p>本プライバシーポリシーは、法令の変更やサービスの改善に伴い、予告なく変更される場合があります。重要な変更がある場合は、サービス内で通知します。</p>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">12. お問い合わせ</h3>
                    <p>プライバシーに関するご質問やデータ削除のご依頼は、アプリ内の「お問い合わせ」フォームからご連絡ください。</p>
                </div>
            </section>

            <hr className="my-8 border-gray-300" />

            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Bahasa Indonesia</h2>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">1. Pendahuluan</h3>
                    <p>Terima kasih telah menggunakan Cosme AI(selanjutnya disebut "Layanan").Kebijakan Privasi ini menjelaskan bagaimana Layanan mengumpulkan, menggunakan, dan melindungi informasi pribadi pengguna.</p>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">2. Informasi yang Dikumpulkan</h3>
                    <p className="mb-4">Layanan mengumpulkan informasi berikut:</p>

                    <div className="mb-4">
                        <h4 className="text-lg font-bold mb-2">2.1 Informasi Akun</h4>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Informasi autentikasi yang disediakan melalui Firebase Authentication(UID, alamat email, dll.)</li>
                            <li>Pengaturan bahasa(Jepang / Indonesia)</li>
                            <li>Pengaturan penampilan(warna kulit, warna mata, warna rambut, usia, penggunaan hijab, dll.)</li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <h4 className="text-lg font-bold mb-2">2.2 Informasi Kosmetik</h4>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Gambar kosmetik yang didaftarkan oleh pengguna</li>
                            <li>Informasi atribut kosmetik(kategori, warna, hasil akhir, dll.)</li>
                            <li>Hasil analisis gambar oleh Google Cloud Vision API</li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <h4 className="text-lg font-bold mb-2">2.3 Informasi Penggunaan</h4>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Riwayat saran makeup(input mood, konten saran, skor kecocokan)</li>
                            <li>Saran makeup yang ditandai sebagai favorit</li>
                            <li>Jumlah penggunaan layanan(manajemen batas sesuai paket)</li>
                            <li>Jumlah pendaftaran kosmetik(manajemen batas sesuai paket)</li>
                            <li>Hasil analisis gambar kosmetik(hasil ekstraksi atribut oleh Google Cloud Vision API)</li>
                            <li>Riwayat pembuatan gambar makeup</li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <h4 className="text-lg font-bold mb-2">2.4 Informasi Pertanyaan</h4>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Konten yang dikirim melalui formulir kontak(kategori, pesan)</li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <h4 className="text-lg font-bold mb-2">2.5 Informasi Pembayaran dan Langganan</h4>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Status paket langganan (Free / Pro / Premium)</li>
                            <li>Riwayat pembayaran dan status penagihan</li>
                            <li>※Informasi kartu kredit dikelola langsung oleh penyedia layanan pembayaran (Stripe) dan tidak disimpan oleh Layanan ini.</li>
                        </ul>
                    </div>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">3. Tujuan Penggunaan Informasi</h3>
                    <p className="mb-4">Informasi yang dikumpulkan digunakan untuk tujuan berikut:</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Menghasilkan saran makeup yang dipersonalisasi dengan AI</li>
                        <li>Analisis kesesuaian dengan kosmetik yang dimiliki</li>
                        <li>Meningkatkan pengalaman pengguna dan perbaikan layanan</li>
                        <li>Manajemen batasan penggunaan(pencegahan penyalahgunaan)</li>
                        <li>Menanggapi pertanyaan</li>
                        <li>Operasi dan pemeliharaan layanan</li>
                    </ul>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">4. Penyimpanan dan Pengelolaan Informasi</h3>

                    <div className="mb-4">
                        <h4 className="text-lg font-bold mb-2">4.1 Lokasi Penyimpanan</h4>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Data pengguna: Google Cloud Firestore</li>
                            <li>Data gambar: Google Cloud Storage</li>
                            <li>Informasi autentikasi: Firebase Authentication</li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <h4 className="text-lg font-bold mb-2">4.2 Periode Penyimpanan</h4>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Informasi akun: Hingga penghapusan akun</li>
                            <li>Gambar kosmetik: Hingga pengguna menghapus atau penghapusan akun</li>
                            <li>Riwayat saran: Hingga penghapusan akun</li>
                            <li>Riwayat pertanyaan: Hingga penghapusan akun</li>
                            <li>Data jumlah penggunaan: Disimpan sebagai riwayat setelah periode berakhir(hingga penghapusan akun)</li>
                        </ul>
                    </div>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">5. Penggunaan Layanan Pihak Ketiga</h3>
                    <p className="mb-4">Layanan ini menggunakan layanan pihak ketiga berikut:</p>

                    <div className="mb-4">
                        <h4 className="text-lg font-bold mb-2">5.1 Google Cloud Platform</h4>
                        <ul className="list-disc pl-6 space-y-1">
                            <li><strong> Tujuan </strong>: Penyimpanan data, analisis gambar, pemrosesan AI</li>
                            <li><strong> Informasi yang diberikan </strong>: Gambar kosmetik, pengaturan pengguna, riwayat saran</li>
                            <li><strong> Kebijakan Privasi </strong>: <a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a></li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <h4 className="text-lg font-bold mb-2">5.2 Firebase</h4>
                        <ul className="list-disc pl-6 space-y-1">
                            <li><strong> Tujuan </strong>: Autentikasi pengguna</li>
                            <li><strong> Informasi yang diberikan </strong>: Informasi autentikasi(alamat email, dll.)</li>
                            <li><strong> Kebijakan Privasi </strong>: <a href="https://firebase.google.com/support/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://firebase.google.com/support/privacy</a></li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <h4 className="text-lg font-bold mb-2">5.3 Rakuten API / Shopee API</h4>
                        <ul className="list-disc pl-6 space-y-1">
                            <li><strong> Tujuan </strong>: Pencarian dan tampilan produk kosmetik yang direkomendasikan</li>
                            <li><strong> Informasi yang diberikan </strong>: Kata kunci pencarian(kategori kosmetik, warna, dll.)</li>
                            <li><strong> Catatan </strong>: Saat mengklik tautan produk, kebijakan privasi masing - masing situs e - commerce berlaku</li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <h4 className="text-lg font-bold mb-2">5.4 Google Gemini API</h4>
                        <ul className="list-disc pl-6 space-y-1">
                            <li><strong> Tujuan </strong>: Pembuatan saran makeup, rekomendasi produk</li>
                            <li><strong> Informasi yang diberikan </strong>: Input mood pengguna, pengaturan penampilan, informasi kosmetik yang dimiliki</li>
                            <li><strong> Kebijakan Privasi </strong>: <a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a></li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <h4 className="text-lg font-bold mb-2">5.5 OpenAI API</h4>
                        <ul className="list-disc pl-6 space-y-1">
                            <li><strong> Tujuan </strong>: Pemrosesan pencocokan kosmetik(pembuatan vektor embedding)</li>
                            <li><strong> Informasi yang diberikan </strong>: Deskripsi kosmetik</li>
                            <li><strong> Kebijakan Privasi </strong>: <a href="https://openai.com/policies/privacy-policy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://openai.com/policies/privacy-policy</a></li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <h4 className="text-lg font-bold mb-2">5.6 Google Cloud Vision API</h4>
                        <ul className="list-disc pl-6 space-y-1">
                            <li><strong> Tujuan </strong>: Analisis gambar kosmetik dan ekstraksi atribut</li>
                            <li><strong> Informasi yang diberikan </strong>: Gambar kosmetik yang diunggah pengguna</li>
                            <li><strong> Kebijakan Privasi </strong>: <a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a></li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <h4 className="text-lg font-bold mb-2">5.7 Google Imagen API</h4>
                        <ul className="list-disc pl-6 space-y-1">
                            <li><strong> Tujuan </strong>: Pembuatan gambar makeup</li>
                            <li><strong> Informasi yang diberikan </strong>: Pengaturan penampilan pengguna, deskripsi saran makeup</li>
                            <li><strong> Kebijakan Privasi </strong>: <a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a></li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <h4 className="text-lg font-bold mb-2">5.8 SendGrid</h4>
                        <ul className="list-disc pl-6 space-y-1">
                            <li><strong> Tujuan </strong>: Notifikasi email pertanyaan</li>
                            <li><strong> Informasi yang diberikan </strong>: ID pengguna, konten pertanyaan, User - Agent</li>
                            <li><strong> Kebijakan Privasi </strong>: <a href="https://www.twilio.com/legal/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://www.twilio.com/legal/privacy</a></li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <h4 className="text-lg font-bold mb-2">5.9 Google Custom Search API</h4>
                        <ul className="list-disc pl-6 space-y-1">
                            <li><strong> Tujuan </strong>: Pencarian produk Shopee(untuk pengguna bahasa Indonesia)</li>
                            <li><strong> Informasi yang diberikan </strong>: Kata kunci pencarian</li>
                            <li><strong> Kebijakan Privasi </strong>: <a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a></li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <h4 className="text-lg font-bold mb-2">5.10 Stripe</h4>
                        <ul className="list-disc pl-6 space-y-1">
                            <li><strong> Tujuan </strong>: Pemrosesan pembayaran kartu kredit</li>
                            <li><strong> Informasi yang diberikan </strong>: Informasi kartu kredit (diberikan langsung), alamat email</li>
                            <li><strong> Kebijakan Privasi </strong>: <a href="https://stripe.com/jp/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://stripe.com/jp/privacy</a></li>
                        </ul>
                    </div>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">6. Berbagi dan Pengungkapan Informasi</h3>
                    <p className="mb-4">Layanan tidak akan mengungkapkan informasi pribadi pengguna kepada pihak ketiga kecuali dalam kasus berikut:</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Dengan persetujuan pengguna</li>
                        <li>Ketika pengungkapan diperlukan berdasarkan hukum</li>
                        <li>Ketika diperlukan untuk melindungi kehidupan, tubuh, atau properti seseorang</li>
                        <li>Ketika mengungkapkan kepada kontraktor bisnis dalam ruang lingkup yang diperlukan untuk penyediaan layanan(termasuk layanan pihak ketiga di atas)</li>
                    </ul>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">7. Keamanan</h3>
                    <p className="mb-4">Layanan menerapkan langkah - langkah berikut untuk melindungi informasi pengguna:</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Autentikasi melalui Firebase Authentication</li>
                        <li>Pemanfaatan fitur keamanan Google Cloud Platform</li>
                        <li>Pembatasan akses(pengguna hanya dapat mengakses data mereka sendiri)</li>
                        <li>Enkripsi komunikasi(HTTPS / TLS)</li>
                    </ul>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">8. Hak Pengguna</h3>
                    <p className="mb-4">Pengguna memiliki hak - hak berikut:</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li><strong> Hak Akses </strong>: Dapat memeriksa informasi yang terdaftar</li>
                        <li><strong> Hak Koreksi </strong>: Dapat memodifikasi pengaturan penampilan dan informasi kosmetik dari halaman saya</li>
                        <li><strong> Hak Penghapusan </strong>: Dapat mengajukan penghapusan akun(penghapusan data) melalui formulir kontak</li>
                        <li><strong> Portabilitas Data </strong>: Jika Anda ingin mengekspor data, silakan hubungi kami</li>
                    </ul>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">9. Cookie・Local Storage</h3>
                    <p className="mb-4">Layanan menyimpan informasi berikut di local storage browser:</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Pengaturan bahasa</li>
                        <li>Saran makeup yang ditandai sebagai favorit</li>
                        <li>Informasi sesi</li>
                    </ul>
                    <p className="mt-4">Informasi ini hanya disimpan di browser pengguna dan digunakan untuk meningkatkan pengalaman layanan.</p>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">10. Informasi Pribadi Anak - anak</h3>
                    <p>Layanan tidak dengan sengaja mengumpulkan informasi pribadi dari anak - anak di bawah 13 tahun.Jika anak di bawah 13 tahun secara tidak sengaja memberikan informasi, silakan hubungi kami segera.</p>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">11. Perubahan Kebijakan Privasi</h3>
                    <p>Kebijakan Privasi ini dapat berubah tanpa pemberitahuan sebelumnya sesuai dengan perubahan hukum atau perbaikan layanan.Jika ada perubahan penting, kami akan memberi tahu Anda melalui layanan.</p>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">12. Kontak</h3>
                    <p>Untuk pertanyaan tentang privasi atau permintaan penghapusan data, silakan hubungi kami melalui formulir "Hubungi Kami" di dalam aplikasi.</p>
                </div>
            </section>

            <hr className="my-8 border-gray-300" />

            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">English</h2>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">1. Introduction</h3>
                    <p>Thank you for using Cosme AI (hereinafter referred to as "the Service"). This Privacy Policy explains how the Service collects, uses, and protects users' personal information.</p>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">2. Information Collected</h3>
                    <p className="mb-4">The Service collects the following information:</p>

                    <div className="mb-4">
                        <h4 className="text-lg font-bold mb-2">2.1 Account Information</h4>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Authentication information provided through Firebase Authentication (UID, email address, etc.)</li>
                            <li>Language settings (Japanese / Indonesian / English)</li>
                            <li>Appearance settings (skin color, eye color, hair color, age, hijab usage, etc.)</li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <h4 className="text-lg font-bold mb-2">2.2 Cosmetic Information</h4>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Images of cosmetics registered by users</li>
                            <li>Cosmetic attribute information (category, color, finish, etc.)</li>
                            <li>Image analysis results from Google Cloud Vision API</li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <h4 className="text-lg font-bold mb-2">2.3 Usage Information</h4>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Makeup suggestion history (mood input, suggestion content, matching score)</li>
                            <li>Makeup suggestions marked as favorites</li>
                            <li>Service usage count (management of limit according to plan)</li>
                            <li>Cosmetic registration count (management of limit according to plan)</li>
                            <li>Cosmetic image analysis results (attribute extraction results from Google Cloud Vision API)</li>
                            <li>Makeup image generation history</li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <h4 className="text-lg font-bold mb-2">2.4 Inquiry Information</h4>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Content submitted through the contact form (category, message)</li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <h4 className="text-lg font-bold mb-2">2.5 Payment and Subscription Information</h4>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Subscription plan status (Free / Pro / Premium)</li>
                            <li>Payment history and billing status</li>
                            <li>※Credit card information is managed directly by the payment processing company (Stripe) and is not stored by this Service.</li>
                        </ul>
                    </div>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">3. Purpose of Information Use</h3>
                    <p className="mb-4">Collected information is used for the following purposes:</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Generation of AI-powered personalized makeup suggestions</li>
                        <li>Compatibility analysis with owned cosmetics</li>
                        <li>User experience improvement and service enhancement</li>
                        <li>Usage limit management (prevention of unauthorized use)</li>
                        <li>Response to inquiries</li>
                        <li>Service operation and maintenance</li>
                    </ul>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">4. Information Storage and Management</h3>

                    <div className="mb-4">
                        <h4 className="text-lg font-bold mb-2">4.1 Storage Location</h4>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>User data: Google Cloud Firestore</li>
                            <li>Image data: Google Cloud Storage</li>
                            <li>Authentication information: Firebase Authentication</li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <h4 className="text-lg font-bold mb-2">4.2 Storage Period</h4>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Account information: Until account deletion</li>
                            <li>Cosmetic images: Until user deletion or account deletion</li>
                            <li>Suggestion history: Until account deletion</li>
                            <li>Inquiry history: Until account deletion</li>
                            <li>Usage count data: Retained as history after each period ends (until account deletion)</li>
                        </ul>
                    </div>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">5. Use of Third-Party Services</h3>
                    <p className="mb-4">This Service uses the following third-party services:</p>

                    <div className="mb-4">
                        <h4 className="text-lg font-bold mb-2">5.1 Google Cloud Platform</h4>
                        <ul className="list-disc pl-6 space-y-1">
                            <li><strong> Purpose </strong>: Data storage, image analysis, AI processing</li>
                            <li><strong> Information Provided </strong>: Cosmetic images, user settings, suggestion history</li>
                            <li><strong> Privacy Policy </strong>: <a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a></li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <h4 className="text-lg font-bold mb-2">5.2 Firebase</h4>
                        <ul className="list-disc pl-6 space-y-1">
                            <li><strong> Purpose </strong>: User authentication</li>
                            <li><strong> Information Provided </strong>: Authentication information (email address, etc.)</li>
                            <li><strong> Privacy Policy </strong>: <a href="https://firebase.google.com/support/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://firebase.google.com/support/privacy</a></li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <h4 className="text-lg font-bold mb-2">5.3 Rakuten API / Shopee API</h4>
                        <ul className="list-disc pl-6 space-y-1">
                            <li><strong> Purpose </strong>: Search and display of recommended cosmetic products</li>
                            <li><strong> Information Provided </strong>: Search keywords (cosmetic category, color, etc.)</li>
                            <li><strong> Note </strong>: When clicking product links, the privacy policy of each e-commerce site applies</li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <h4 className="text-lg font-bold mb-2">5.4 Google Gemini API</h4>
                        <ul className="list-disc pl-6 space-y-1">
                            <li><strong> Purpose </strong>: Makeup suggestion generation, product recommendations</li>
                            <li><strong> Information Provided </strong>: User mood input, appearance settings, owned cosmetic information</li>
                            <li><strong> Privacy Policy </strong>: <a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a></li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <h4 className="text-lg font-bold mb-2">5.5 OpenAI API</h4>
                        <ul className="list-disc pl-6 space-y-1">
                            <li><strong> Purpose </strong>: Cosmetic matching processing (vector embedding generation)</li>
                            <li><strong> Information Provided </strong>: Cosmetic descriptions</li>
                            <li><strong> Privacy Policy </strong>: <a href="https://openai.com/policies/privacy-policy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://openai.com/policies/privacy-policy</a></li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <h4 className="text-lg font-bold mb-2">5.6 Google Cloud Vision API</h4>
                        <ul className="list-disc pl-6 space-y-1">
                            <li><strong> Purpose </strong>: Cosmetic image analysis and attribute extraction</li>
                            <li><strong> Information Provided </strong>: Cosmetic images uploaded by users</li>
                            <li><strong> Privacy Policy </strong>: <a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a></li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <h4 className="text-lg font-bold mb-2">5.7 Google Imagen API</h4>
                        <ul className="list-disc pl-6 space-y-1">
                            <li><strong> Purpose </strong>: Makeup image generation</li>
                            <li><strong> Information Provided </strong>: User appearance settings, makeup suggestion descriptions</li>
                            <li><strong> Privacy Policy </strong>: <a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a></li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <h4 className="text-lg font-bold mb-2">5.8 SendGrid</h4>
                        <ul className="list-disc pl-6 space-y-1">
                            <li><strong> Purpose </strong>: Contact email notifications</li>
                            <li><strong> Information Provided </strong>: User ID, inquiry content, User-Agent</li>
                            <li><strong> Privacy Policy </strong>: <a href="https://www.twilio.com/legal/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://www.twilio.com/legal/privacy</a></li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <h4 className="text-lg font-bold mb-2">5.9 Google Custom Search API</h4>
                        <ul className="list-disc pl-6 space-y-1">
                            <li><strong> Purpose </strong>: Shopee product search (for Indonesian language users)</li>
                            <li><strong> Information Provided </strong>: Search keywords</li>
                            <li><strong> Privacy Policy </strong>: <a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a></li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <h4 className="text-lg font-bold mb-2">5.10 Stripe</h4>
                        <ul className="list-disc pl-6 space-y-1">
                            <li><strong> Purpose </strong>: Credit card payment processing</li>
                            <li><strong> Information Provided </strong>: Credit card information (provided directly), email address</li>
                            <li><strong> Privacy Policy </strong>: <a href="https://stripe.com/jp/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://stripe.com/jp/privacy</a></li>
                        </ul>
                    </div>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">6. Information Sharing and Disclosure</h3>
                    <p className="mb-4">The Service does not disclose users' personal information to third parties except in the following cases:</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>With user consent</li>
                        <li>When disclosure is required by law</li>
                        <li>When necessary to protect life, body, or property</li>
                        <li>When disclosing to business contractors within the scope necessary for service provision (including the above third-party services)</li>
                    </ul>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">7. Security</h3>
                    <p className="mb-4">The Service implements the following measures to protect user information:</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Authentication through Firebase Authentication</li>
                        <li>Utilization of Google Cloud Platform security features</li>
                        <li>Access restrictions (users can only access their own data)</li>
                        <li>Communication encryption (HTTPS / TLS)</li>
                    </ul>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">8. User Rights</h3>
                    <p className="mb-4">Users have the following rights:</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li><strong> Access Right </strong>: Can view registered information</li>
                        <li><strong> Correction Right </strong>: Can modify appearance settings and cosmetic information from My Page</li>
                        <li><strong> Deletion Right </strong>: Can request account deletion (data deletion) through the contact form</li>
                        <li><strong> Data Portability </strong>: If you wish to export data, please contact us</li>
                    </ul>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">9. Cookies・Local Storage</h3>
                    <p className="mb-4">The Service stores the following information in browser local storage:</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Language settings</li>
                        <li>Makeup suggestions marked as favorites</li>
                        <li>Session information</li>
                    </ul>
                    <p className="mt-4">This information is only stored in the user's browser and is used to improve the service experience.</p>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">10. Children's Personal Information</h3>
                    <p>The Service does not intentionally collect personal information from children under 13 years of age. If a child under 13 accidentally provides information, please contact us immediately.</p>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">11. Privacy Policy Changes</h3>
                    <p>This Privacy Policy may be changed without prior notice in accordance with legal changes or service improvements. If there are important changes, we will notify you through the service.</p>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">12. Contact</h3>
                    <p>For questions about privacy or data deletion requests, please contact us through the "Contact" form in the app.</p>
                </div>
            </section>

            <hr className="my-8 border-gray-300" />

            <p className="font-bold">
                Effective Date: January 6, 2026
            </p>
        </div>
    );
};

export default Privacy;
