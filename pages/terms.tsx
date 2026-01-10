import React from 'react';

const Terms = () => {
    return (
        <div className="max-w-4xl mx-auto p-6 bg-white text-gray-800 font-sans">
            <h1 className="text-3xl font-bold mb-4">利用規約 / Terms of Service</h1>

            <p className="font-bold mb-8">
                最終更新日: 2026年1月6日
            </p>

            <hr className="my-8 border-gray-300" />

            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">日本語版</h2>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">第1条(適用)</h3>
                    <ol className="list-decimal pl-6 space-y-2">
                        <li>本規約は、Cosme AI(以下「本サービス」)の利用に関する条件を定めるものです。</li>
                        <li>ユーザーは、本サービスを利用することにより、本規約に同意したものとみなされます。</li>
                        <li>本規約に同意いただけない場合は、本サービスをご利用いただけません。</li>
                    </ol>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">第2条(サービス内容)</h3>
                    <p className="mb-4">本サービスは、以下の機能を提供します:</p>
                    <ol className="list-decimal pl-6 space-y-2">
                        <li><strong> AIメイク提案機能 </strong>: ユーザーの気分入力に基づき、AI(Google Gemini等)がパーソナライズされたメイク提案を生成</li>
                        <li><strong> コスメ登録機能 </strong>: 手持ちコスメの写真を撮影・登録し、AI(Google Cloud Vision等)が自動で分析</li>
                        <li><strong> マッチング機能 </strong>: 提案されたメイクと手持ちコスメの適合性を分析</li>
                        <li><strong> レコメンデーション機能 </strong>: 不足しているコスメに対して、AIが代替商品を提案(楽天 / Shopeeのアフィリエイトリンクを含む)ユーザーがリンク先で購入した商品に応じて、運営者が手数料を受け取る場合があります。</li>
                        <li><strong> 外見カスタマイズ機能 </strong>: 肌の色、目の色、髪の色などを設定し、よりパーソナライズされた提案を受ける(画像生成にはGoogle Imagen 3等を使用)</li>
                        <li><strong> 多言語対応 </strong>: 日本語とインドネシア語に対応</li>
                    </ol>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">第3条(利用登録)</h3>
                    <ol className="list-decimal pl-6 space-y-2">
                        <li>本サービスの利用には、Firebase Authenticationを通じた認証が必要です。</li>
                        <li>ユーザーは、正確かつ最新の情報を登録する責任を負います。</li>
                        <li>13歳未満の方は本サービスをご利用いただけません。</li>
                    </ol>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">第4条(利用制限)</h3>
                    <p className="mb-4">本サービスは、プランに応じて以下の利用制限があります:</p>

                    <div className="mb-4">
                        <h4 className="font-bold mb-2">1. Free Plan (無料)</h4>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>メイク画像生成: 月2回まで</li>
                            <li>おすすめ提案: 月10回まで</li>
                            <li>コスメ登録: 月2回まで</li>
                        </ul>
                        <p className="mt-2 text-sm text-gray-600">※使用回数のリセットはカレンダー月ベース（毎月1日にリセット）です。</p>
                    </div>

                    <div className="mb-4">
                        <h4 className="font-bold mb-2">2. Pro Plan</h4>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>メイク画像生成: 月10回まで</li>
                            <li>おすすめ提案: 無制限</li>
                            <li>コスメ登録: 10回まで</li>
                        </ul>
                        <p className="mt-2 text-sm text-gray-600">※使用回数のリセットは入会日ベースです。</p>
                    </div>

                    <div className="mb-4">
                        <h4 className="font-bold mb-2">3. Premium Plan</h4>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>メイク画像生成: 月15回まで</li>
                            <li>おすすめ提案: 無制限</li>
                            <li>コスメ登録: 月15回まで</li>
                        </ul>
                        <p className="mt-2 text-sm text-gray-600">※使用回数のリセットは入会日ベースです。</p>
                    </div>
                    <p className="mt-4">これらの制限は、サービスの公平な利用と品質維持のために設けられています。</p>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">第5条(有料プラン)</h3>
                    <ol className="list-decimal pl-6 space-y-2">
                        <li><strong>プラン内容</strong>: Pro PlanおよびPremium Planの詳細は、本サービス内のプラン説明ページおよび特定商取引法に基づく表記に定めます。</li>
                        <li><strong>利用料金</strong>: 利用料金は、別途定める料金表(特定商取引法に基づく表記)に従います。</li>
                        <li><strong>支払方法</strong>: Stripeを通じたクレジットカード決済のみ受け付けます。</li>
                        <li><strong>自動更新</strong>: 有料プランは1ヶ月ごとの自動更新となります。解約手続きが行われない限り、自動的に課金されます。</li>
                        <li><strong>解約</strong>: ユーザーはマイページからいつでも解約手続きを行うことができます。Pro PlanおよびPremium Planを解約した場合、解約後も1か月間満了までプランを使用可能です。期間満了後、Freeプランへ移行します。</li>
                        <li><strong>返金</strong>: 既にお支払いいただいた利用料金の返金には応じられません。</li>
                    </ol>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">第6条(禁止事項)</h3>
                    <p className="mb-4">ユーザーは、以下の行為を行ってはなりません:</p>
                    <ol className="list-decimal pl-6 space-y-2">
                        <li>法令または公序良俗に違反する行為</li>
                        <li>犯罪行為に関連する行為</li>
                        <li>本サービスの運営を妨害する行為</li>
                        <li>他のユーザーまたは第三者の権利を侵害する行為</li>
                        <li>虚偽の情報を登録する行為</li>
                        <li>複数のアカウントを不正に作成し、利用制限を回避する行為</li>
                        <li>本サービスのセキュリティを脅かす行為</li>
                        <li>本サービスのリバースエンジニアリング、逆コンパイル、逆アセンブル</li>
                        <li>商業目的での無断使用</li>
                        <li>他人が撮影した画像や、第三者の権利を侵害する画像をアップロードする行為</li>
                        <li>その他、運営者が不適切と判断する行為</li>
                    </ol>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">第7条(知的財産権)</h3>
                    <ol className="list-decimal pl-6 space-y-2">
                        <li>本サービスに関する知的財産権は、運営者または正当な権利者に帰属します。</li>
                        <li>ユーザーが登録したコスメ画像の著作権は、ユーザーに帰属します。</li>
                        <li>ユーザーは、登録した画像について、本サービスの提供に必要な範囲で運営者に利用を許諾するものとします。</li>
                        <li>AIが生成したメイク提案画像の著作権は、運営者に帰属します。ただし、ユーザーは個人的な利用の範囲で自由に使用できます。</li>
                    </ol>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">第8条(ユーザーの責任)</h3>
                    <ol className="list-decimal pl-6 space-y-2">
                        <li>ユーザーは、自己の責任において本サービスを利用するものとします。</li>
                        <li>ユーザーは、登録した画像が第三者の権利を侵害しないことを保証します。</li>
                        <li>ユーザーの行為により運営者または第三者に損害が生じた場合、ユーザーは一切の責任を負うものとします。</li>
                    </ol>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">第9条(免責事項)</h3>
                    <ol className="list-decimal pl-6 space-y-2">
                        <li>
                            本サービスは「現状有姿」で提供され、運営者は以下について保証しません:
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                                <li>サービスの正確性、完全性、有用性</li>
                                <li>サービスの中断、エラー、バグがないこと</li>
                                <li>AIによる提案の効果や結果</li>
                                <li>メイク提案画像はAI(Google Imagen 3等)により生成されたイメージであり、実際のメイクアップ効果を正確に保証するものではありません。</li>
                                <li>第三者サービス(楽天、Shopee等)の商品情報の正確性</li>
                            </ul>
                        </li>
                        <li>
                            運営者は、以下の場合について一切の責任を負いません:
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                                <li>ユーザーの本サービス利用により生じた損害</li>
                                <li>通信回線やコンピュータの障害による損害</li>
                                <li>第三者による不正アクセスやデータの改ざん</li>
                                <li>外部リンク先(楽天、Shopee等)での取引に関するトラブル</li>
                            </ul>
                        </li>
                        <li>本サービスで提供される情報は参考情報であり、医学的・専門的アドバイスではありません。</li>
                    </ol>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">第10条(サービスの変更・中断・終了)</h3>
                    <ol className="list-decimal pl-6 space-y-2">
                        <li>運営者は、ユーザーへの事前通知なく、本サービスの内容を変更、追加、削除できます。</li>
                        <li>
                            運営者は、以下の場合、本サービスを一時的に中断できます:
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                                <li>システムの保守・点検を行う場合</li>
                                <li>天災地変等の不可抗力により運営が困難な場合</li>
                                <li>その他、運営上必要と判断した場合</li>
                            </ul>
                        </li>
                        <li>運営者は、本サービスを終了する場合、可能な限り事前に通知します。</li>
                    </ol>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">第11条(アカウントの停止・削除)</h3>
                    <p className="mb-4">運営者は、ユーザーが以下に該当する場合、事前通知なくアカウントを停止または削除できます:</p>
                    <ol className="list-decimal pl-6 space-y-2">
                        <li>本規約に違反した場合</li>
                        <li>登録情報に虚偽があった場合</li>
                        <li>長期間(6ヶ月以上)利用がない場合</li>
                        <li>その他、運営者が不適切と判断した場合</li>
                    </ol>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">第12条(退会)</h3>
                    <ol className="list-decimal pl-6 space-y-2">
                        <li>ユーザーは、アプリ内の「お問い合わせ」フォームから退会を申請できます。</li>
                        <li>退会により、登録されたすべてのデータ(コスメ情報、提案履歴等)が削除されます。</li>
                        <li>削除されたデータは復元できません。</li>
                    </ol>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">第13条(個人情報の取扱いとデータ処理)</h3>
                    <ol className="list-decimal pl-6 space-y-2">
                        <li>個人情報の取扱いについては、別途定める「プライバシーポリシー」に従います。</li>
                        <li>
                            本サービスは、データ処理およびサービス提供のために以下の第三者サービスを利用します:
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                                <li>Google Cloud Platform(Gemini, Imagen, Vision API等): AI処理、画像解析、データ保存</li>
                                <li>Firebase: 認証、データベース</li>
                                <li>SendGrid: メール送信</li>
                                <li>Stripe: クレジットカード決済</li>
                            </ul>
                            <p className="mt-2">ユーザーは、本サービスの利用において、これらの第三者サービスによってデータが処理されることに同意するものとします。</p>
                        </li>
                        <li>
                            サービス改善のための情報収集: 本サービスでは、安定した運営および品質向上のため、エラーログや利用状況に関する情報を収集する場合があります。これらの情報は、第三者ツール（Sentry等）を通じて収集・分析され、不具合の調査およびサービス改善の目的以外には使用されません。
                        </li>
                    </ol>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">第14条(規約の変更)</h3>
                    <ol className="list-decimal pl-6 space-y-2">
                        <li>運営者は、必要に応じて本規約を変更できます。</li>
                        <li>重要な変更がある場合は、サービス内で通知します。</li>
                        <li>変更後も本サービスを継続利用した場合、変更に同意したものとみなされます。</li>
                    </ol>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">第15条(準拠法・管轄裁判所)</h3>
                    <ol className="list-decimal pl-6 space-y-2">
                        <li>本規約は、日本法に準拠します。</li>
                        <li>本サービスに関する紛争については、運営者の所在地を管轄する裁判所を専属的合意管轄裁判所とします。</li>
                    </ol>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">第16条(お問い合わせ)</h3>
                    <p>本規約に関するご質問は、アプリ内の「お問い合わせ」フォームからご連絡ください。</p>
                </div>
            </section>

            <hr className="my-8 border-gray-300" />

            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Bahasa Indonesia</h2>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">Pasal 1(Penerapan)</h3>
                    <ol className="list-decimal pl-6 space-y-2">
                        <li>Ketentuan ini mengatur kondisi penggunaan Cosme AI(selanjutnya disebut "Layanan").</li>
                        <li>Pengguna dianggap telah menyetujui ketentuan ini dengan menggunakan Layanan.</li>
                        <li>Jika Anda tidak setuju dengan ketentuan ini, Anda tidak dapat menggunakan Layanan.</li>
                    </ol>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">Pasal 2(Konten Layanan)</h3>
                    <p className="mb-4">Layanan menyediakan fungsi - fungsi berikut:</p>
                    <ol className="list-decimal pl-6 space-y-2">
                        <li><strong> Fungsi Saran Makeup AI </strong>: AI(Google Gemini, dll.) menghasilkan saran makeup yang dipersonalisasi berdasarkan input mood pengguna</li>
                        <li><strong> Fungsi Pendaftaran Kosmetik </strong>: Mengambil foto dan mendaftarkan kosmetik yang dimiliki, AI(Google Cloud Vision, dll.) secara otomatis menganalisis</li>
                        <li><strong> Fungsi Pencocokan </strong>: Menganalisis kesesuaian antara makeup yang disarankan dan kosmetik yang dimiliki</li>
                        <li><strong> Fungsi Rekomendasi </strong>: AI menyarankan produk alternatif untuk kosmetik yang kurang(termasuk tautan afiliasi Rakuten / Shopee)</li>
                        <li><strong> Fungsi Kustomisasi Penampilan </strong>: Mengatur warna kulit, warna mata, warna rambut, dll.untuk mendapatkan saran yang lebih personal(Menggunakan Google Imagen 3, dll.untuk pembuatan gambar)</li>
                        <li><strong> Dukungan Multibahasa </strong>: Mendukung bahasa Jepang dan Indonesia</li>
                    </ol>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">Pasal 3(Pendaftaran Penggunaan)</h3>
                    <ol className="list-decimal pl-6 space-y-2">
                        <li>Penggunaan Layanan memerlukan autentikasi melalui Firebase Authentication.</li>
                        <li>Pengguna bertanggung jawab untuk mendaftarkan informasi yang akurat dan terkini.</li>
                        <li>Orang di bawah 13 tahun tidak dapat menggunakan Layanan ini.</li>
                    </ol>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">Pasal 4(Batasan Penggunaan)</h3>
                    <p className="mb-4">Layanan memiliki batasan penggunaan berikut sesuai dengan paket:</p>

                    <div className="mb-4">
                        <h4 className="font-bold mb-2">1. Paket Free (Gratis)</h4>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Pembuatan gambar makeup: Hingga 2 kali per bulan</li>
                            <li>Saran rekomendasi: Hingga 10 kali per bulan</li>
                            <li>Pendaftaran kosmetik: Hingga 2 kali per bulan</li>
                        </ul>
                        <p className="mt-2 text-sm text-gray-600">※Reset jumlah penggunaan berdasarkan kalender bulanan (reset setiap tanggal 1).</p>
                    </div>

                    <div className="mb-4">
                        <h4 className="font-bold mb-2">2. Paket Pro</h4>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Pembuatan gambar makeup: Hingga 10 kali per bulan</li>
                            <li>Saran rekomendasi: Tanpa batas</li>
                            <li>Pendaftaran kosmetik: Hingga 10 kali</li>
                        </ul>
                        <p className="mt-2 text-sm text-gray-600">※Reset jumlah penggunaan berdasarkan tanggal pendaftaran.</p>
                    </div>

                    <div className="mb-4">
                        <h4 className="font-bold mb-2">3. Paket Premium</h4>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Pembuatan gambar makeup: Hingga 15 kali per bulan</li>
                            <li>Saran rekomendasi: Tanpa batas</li>
                            <li>Pendaftaran kosmetik: Hingga 15 kali per bulan</li>
                        </ul>
                        <p className="mt-2 text-sm text-gray-600">※Reset jumlah penggunaan berdasarkan tanggal pendaftaran.</p>
                    </div>
                    <p className="mt-4">Batasan ini ditetapkan untuk penggunaan layanan yang adil dan pemeliharaan kualitas.</p>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">Pasal 5(Paket Berbayar)</h3>
                    <ol className="list-decimal pl-6 space-y-2">
                        <li><strong>Konten Paket</strong>: Detail Paket Pro dan Paket Premium ditentukan dalam halaman penjelasan paket dalam Layanan dan dalam ketentuan berdasarkan Undang-Undang Transaksi Komersial Tertentu.</li>
                        <li><strong>Biaya Penggunaan</strong>: Biaya penggunaan mengikuti tabel harga yang ditetapkan secara terpisah (ketentuan berdasarkan Undang-Undang Transaksi Komersial Tertentu).</li>
                        <li><strong>Metode Pembayaran</strong>: Hanya menerima pembayaran kartu kredit melalui Stripe.</li>
                        <li><strong>Perpanjangan Otomatis</strong>: Paket berbayar akan diperpanjang secara otomatis setiap bulan. Kecuali prosedur pembatalan dilakukan, pembayaran akan dilakukan secara otomatis.</li>
                        <li><strong>Pembatalan</strong>: Pengguna dapat melakukan prosedur pembatalan kapan saja dari halaman My Page. Jika Paket Pro atau Paket Premium dibatalkan, paket tersebut masih dapat digunakan hingga 1 bulan setelah pembatalan. Setelah periode berakhir, akan beralih ke Paket Free.</li>
                        <li><strong>Pengembalian Dana</strong>: Kami tidak dapat memberikan pengembalian dana untuk biaya penggunaan yang telah dibayarkan.</li>
                    </ol>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">Pasal 6(Tindakan yang Dilarang)</h3>
                    <p className="mb-4">Pengguna tidak boleh melakukan tindakan berikut:</p>
                    <ol className="list-decimal pl-6 space-y-2">
                        <li>Tindakan yang melanggar hukum atau ketertiban umum</li>
                        <li>Tindakan yang terkait dengan tindak kriminal</li>
                        <li>Tindakan yang mengganggu operasi Layanan</li>
                        <li>Tindakan yang melanggar hak pengguna lain atau pihak ketiga</li>
                        <li>Mendaftarkan informasi palsu</li>
                        <li>Membuat beberapa akun secara tidak sah untuk menghindari batasan penggunaan</li>
                        <li>Tindakan yang mengancam keamanan Layanan</li>
                        <li>Reverse engineering, dekompilasi, atau disassembly Layanan</li>
                        <li>Penggunaan komersial tanpa izin</li>
                        <li>Tindakan lain yang dianggap tidak pantas oleh operator</li>
                    </ol>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">Pasal 7(Hak Kekayaan Intelektual)</h3>
                    <ol className="list-decimal pl-6 space-y-2">
                        <li>Hak kekayaan intelektual terkait Layanan adalah milik operator atau pemegang hak yang sah.</li>
                        <li>Hak cipta gambar kosmetik yang didaftarkan oleh pengguna adalah milik pengguna.</li>
                        <li>Pengguna memberikan izin kepada operator untuk menggunakan gambar yang didaftarkan dalam ruang lingkup yang diperlukan untuk penyediaan Layanan.</li>
                        <li>Hak cipta gambar saran makeup yang dihasilkan oleh AI adalah milik operator.Namun, pengguna dapat menggunakannya secara bebas untuk penggunaan pribadi.</li>
                    </ol>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">Pasal 8(Tanggung Jawab Pengguna)</h3>
                    <ol className="list-decimal pl-6 space-y-2">
                        <li>Pengguna menggunakan Layanan atas tanggung jawab sendiri.</li>
                        <li>Pengguna menjamin bahwa gambar yang didaftarkan tidak melanggar hak pihak ketiga.</li>
                        <li>Jika tindakan pengguna menyebabkan kerusakan pada operator atau pihak ketiga, pengguna bertanggung jawab penuh.</li>
                    </ol>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">Pasal 9(Penafian)</h3>
                    <ol className="list-decimal pl-6 space-y-2">
                        <li>
                            Layanan disediakan "sebagaimana adanya", dan operator tidak menjamin hal - hal berikut:
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                                <li>Keakuratan, kelengkapan, kegunaan Layanan</li>
                                <li>Tidak ada gangguan, kesalahan, atau bug pada Layanan</li>
                                <li>Efek atau hasil saran AI</li>
                                <li>Gambar saran makeup adalah ilustrasi yang dihasilkan oleh AI(Google Imagen 3, dll.) dan tidak menjamin efek makeup yang sebenarnya secara akurat.</li>
                                <li>Keakuratan informasi produk dari layanan pihak ketiga(Rakuten, Shopee, dll.)</li>
                            </ul>
                        </li>
                        <li>
                            Operator tidak bertanggung jawab dalam kasus berikut:
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                                <li>Kerusakan yang timbul dari penggunaan Layanan oleh pengguna</li>
                                <li>Kerusakan karena gangguan jalur komunikasi atau komputer</li>
                                <li>Akses tidak sah atau manipulasi data oleh pihak ketiga</li>
                                <li>Masalah terkait transaksi di tautan eksternal(Rakuten, Shopee, dll.)</li>
                            </ul>
                        </li>
                        <li>Informasi yang disediakan dalam Layanan adalah informasi referensi dan bukan nasihat medis atau profesional.</li>
                    </ol>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">Pasal 10(Perubahan, Gangguan, Penghentian Layanan)</h3>
                    <ol className="list-decimal pl-6 space-y-2">
                        <li>Operator dapat mengubah, menambah, atau menghapus konten Layanan tanpa pemberitahuan sebelumnya kepada pengguna.</li>
                        <li>
                            Operator dapat menghentikan Layanan sementara dalam kasus berikut:
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                                <li>Saat melakukan pemeliharaan atau inspeksi sistem</li>
                                <li>Saat operasi sulit karena force majeure seperti bencana alam</li>
                                <li>Kasus lain yang dianggap perlu untuk operasi</li>
                            </ul>
                        </li>
                        <li>Operator akan memberi tahu sebelumnya jika memungkinkan saat mengakhiri Layanan.</li>
                    </ol>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">Pasal 11(Penangguhan atau Penghapusan Akun)</h3>
                    <p className="mb-4">Operator dapat menangguhkan atau menghapus akun tanpa pemberitahuan sebelumnya jika pengguna:</p>
                    <ol className="list-decimal pl-6 space-y-2">
                        <li>Melanggar ketentuan ini</li>
                        <li>Ada informasi palsu dalam informasi pendaftaran</li>
                        <li>Tidak ada penggunaan untuk waktu yang lama(lebih dari 6 bulan)</li>
                        <li>Kasus lain yang dianggap tidak pantas oleh operator</li>
                    </ol>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">Pasal 12(Penghapusan Akun)</h3>
                    <ol className="list-decimal pl-6 space-y-2">
                        <li>Pengguna dapat mengajukan penghapusan akun melalui formulir "Hubungi Kami" di dalam aplikasi.</li>
                        <li>Dengan penghapusan akun, semua data yang terdaftar(informasi kosmetik, riwayat saran, dll.) akan dihapus.</li>
                        <li>Data yang dihapus tidak dapat dipulihkan.</li>
                    </ol>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">Pasal 13(Penanganan Informasi Pribadi dan Pemrosesan Data)</h3>
                    <ol className="list-decimal pl-6 space-y-2">
                        <li>Penanganan informasi pribadi mengikuti "Kebijakan Privasi" yang ditetapkan secara terpisah.</li>
                        <li>
                            Layanan ini menggunakan layanan pihak ketiga berikut untuk pemrosesan data dan penyediaan layanan:
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                                <li>Google Cloud Platform(Gemini, Imagen, Vision API, dll.): Pemrosesan AI, analisis gambar, penyimpanan data</li>
                                <li>Firebase: Autentikasi, basis data</li>
                                <li>SendGrid: Pengiriman email</li>
                                <li>Stripe: Pembayaran kartu kredit</li>
                            </ul>
                            <p className="mt-2">Pengguna setuju bahwa data akan diproses oleh layanan pihak ketiga ini dalam penggunaan Layanan.</p>
                        </li>
                        <li>
                            Pengumpulan Informasi untuk Peningkatan Layanan: Layanan ini dapat mengumpulkan informasi terkait log kesalahan dan kondisi penggunaan untuk operasi yang stabil dan peningkatan kualitas. Informasi ini dikumpulkan dan dianalisis melalui alat pihak ketiga (Sentry, dll.) dan hanya digunakan untuk tujuan investigasi masalah dan peningkatan layanan.
                        </li>
                    </ol>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">Pasal 14(Perubahan Ketentuan)</h3>
                    <ol className="list-decimal pl-6 space-y-2">
                        <li>Operator dapat mengubah ketentuan ini sesuai kebutuhan.</li>
                        <li>Jika ada perubahan penting, akan diberitahukan melalui Layanan.</li>
                        <li>Jika Anda terus menggunakan Layanan setelah perubahan, Anda dianggap telah menyetujui perubahan tersebut.</li>
                    </ol>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">Pasal 15(Hukum yang Berlaku dan Yurisdiksi)</h3>
                    <ol className="list-decimal pl-6 space-y-2">
                        <li>Ketentuan ini diatur oleh hukum Jepang.</li>
                        <li>Untuk sengketa terkait Layanan, pengadilan yang memiliki yurisdiksi atas lokasi operator akan menjadi pengadilan yurisdiksi eksklusif yang disepakati.</li>
                    </ol>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">Pasal 16(Kontak)</h3>
                    <p>Untuk pertanyaan tentang ketentuan ini, silakan hubungi kami melalui formulir "Hubungi Kami" di dalam aplikasi.</p>
                </div>
            </section>

            <hr className="my-8 border-gray-300" />

            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">English</h2>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">Article 1 (Application)</h3>
                    <ol className="list-decimal pl-6 space-y-2">
                        <li>These Terms set forth the conditions for the use of Cosme AI (hereinafter referred to as "the Service").</li>
                        <li>Users are deemed to have agreed to these Terms by using the Service.</li>
                        <li>If you do not agree to these Terms, you may not use the Service.</li>
                    </ol>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">Article 2 (Service Content)</h3>
                    <p className="mb-4">The Service provides the following functions:</p>
                    <ol className="list-decimal pl-6 space-y-2">
                        <li><strong> AI Makeup Suggestion Function </strong>: AI (Google Gemini, etc.) generates personalized makeup suggestions based on user mood input</li>
                        <li><strong> Cosmetic Registration Function </strong>: Take photos and register owned cosmetics, AI (Google Cloud Vision, etc.) automatically analyzes</li>
                        <li><strong> Matching Function </strong>: Analyzes compatibility between suggested makeup and owned cosmetics</li>
                        <li><strong> Recommendation Function </strong>: AI suggests alternative products for missing cosmetics (including Rakuten / Shopee affiliate links). The operator may receive fees when users purchase products through the links.</li>
                        <li><strong> Appearance Customization Function </strong>: Set skin color, eye color, hair color, etc. to receive more personalized suggestions (uses Google Imagen 3, etc. for image generation)</li>
                        <li><strong> Multilingual Support </strong>: Supports Japanese, Indonesian, and English</li>
                    </ol>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">Article 3 (Usage Registration)</h3>
                    <ol className="list-decimal pl-6 space-y-2">
                        <li>Use of the Service requires authentication through Firebase Authentication.</li>
                        <li>Users are responsible for registering accurate and up-to-date information.</li>
                        <li>Persons under 13 years of age may not use this Service.</li>
                    </ol>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">Article 4 (Usage Restrictions)</h3>
                    <p className="mb-4">The Service has the following usage restrictions according to the plan:</p>

                    <div className="mb-4">
                        <h4 className="font-bold mb-2">1. Free Plan</h4>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Makeup image generation: Up to 2 times per month</li>
                            <li>Recommendation suggestions: Up to 10 times per month</li>
                            <li>Cosmetic registration: Up to 2 times per month</li>
                        </ul>
                        <p className="mt-2 text-sm text-gray-600">※Usage count resets are based on calendar month (resets on the 1st of each month).</p>
                    </div>

                    <div className="mb-4">
                        <h4 className="font-bold mb-2">2. Pro Plan</h4>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Makeup image generation: Up to 10 times per month</li>
                            <li>Recommendation suggestions: Unlimited</li>
                            <li>Cosmetic registration: Up to 10 times</li>
                        </ul>
                        <p className="mt-2 text-sm text-gray-600">※Usage count resets are based on subscription start date.</p>
                    </div>

                    <div className="mb-4">
                        <h4 className="font-bold mb-2">3. Premium Plan</h4>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Makeup image generation: Up to 15 times per month</li>
                            <li>Recommendation suggestions: Unlimited</li>
                            <li>Cosmetic registration: Up to 15 times per month</li>
                        </ul>
                        <p className="mt-2 text-sm text-gray-600">※Usage count resets are based on subscription start date.</p>
                    </div>
                    <p className="mt-4">These restrictions are set for fair use of the service and quality maintenance.</p>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">Article 5 (Paid Plans)</h3>
                    <ol className="list-decimal pl-6 space-y-2">
                        <li><strong>Plan Content</strong>: Details of Pro Plan and Premium Plan are specified in the plan description page within the Service and in the Commercial Transaction Terms.</li>
                        <li><strong>Usage Fees</strong>: Usage fees follow the separately specified fee table (Commercial Transaction Terms).</li>
                        <li><strong>Payment Method</strong>: Only credit card payments through Stripe are accepted.</li>
                        <li><strong>Auto-Renewal</strong>: Paid plans will automatically renew monthly. Unless cancellation procedures are performed, billing will occur automatically.</li>
                        <li><strong>Cancellation</strong>: Users can perform cancellation procedures at any time from My Page. If Pro Plan or Premium Plan is cancelled, the plan can still be used for 1 month after cancellation until the period expires. After the period ends, it will switch to Free plan.</li>
                        <li><strong>Refunds</strong>: We cannot provide refunds for usage fees already paid.</li>
                    </ol>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">Article 6 (Prohibited Acts)</h3>
                    <p className="mb-4">Users must not perform the following acts:</p>
                    <ol className="list-decimal pl-6 space-y-2">
                        <li>Acts that violate laws or public order and morals</li>
                        <li>Acts related to criminal acts</li>
                        <li>Acts that interfere with the operation of the Service</li>
                        <li>Acts that infringe on the rights of other users or third parties</li>
                        <li>Registering false information</li>
                        <li>Creating multiple accounts fraudulently to avoid usage restrictions</li>
                        <li>Acts that threaten the security of the Service</li>
                        <li>Reverse engineering, decompilation, or disassembly of the Service</li>
                        <li>Unauthorized commercial use</li>
                        <li>Uploading images taken by others or images that infringe on third-party rights</li>
                        <li>Other acts deemed inappropriate by the operator</li>
                    </ol>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">Article 7 (Intellectual Property Rights)</h3>
                    <ol className="list-decimal pl-6 space-y-2">
                        <li>Intellectual property rights related to the Service belong to the operator or rightful owner.</li>
                        <li>Copyright of cosmetic images registered by users belongs to the users.</li>
                        <li>Users grant the operator permission to use registered images within the scope necessary for providing the Service.</li>
                        <li>Copyright of makeup suggestion images generated by AI belongs to the operator. However, users may freely use them within the scope of personal use.</li>
                    </ol>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">Article 8 (User Responsibility)</h3>
                    <ol className="list-decimal pl-6 space-y-2">
                        <li>Users shall use the Service at their own responsibility.</li>
                        <li>Users guarantee that registered images do not infringe on third-party rights.</li>
                        <li>If user actions cause damage to the operator or third parties, the user shall bear all responsibility.</li>
                    </ol>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">Article 9 (Disclaimer)</h3>
                    <ol className="list-decimal pl-6 space-y-2">
                        <li>
                            The Service is provided "as is," and the operator does not guarantee the following:
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                                <li>Accuracy, completeness, usefulness of the Service</li>
                                <li>Absence of interruptions, errors, or bugs in the Service</li>
                                <li>Effectiveness or results of AI suggestions</li>
                                <li>Makeup suggestion images are illustrations generated by AI (Google Imagen 3, etc.) and do not accurately guarantee actual makeup effects.</li>
                                <li>Accuracy of product information from third-party services (Rakuten, Shopee, etc.)</li>
                            </ul>
                        </li>
                        <li>
                            The operator bears no responsibility in the following cases:
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                                <li>Damage arising from user's use of the Service</li>
                                <li>Damage due to communication line or computer failures</li>
                                <li>Unauthorized access or data tampering by third parties</li>
                                <li>Troubles related to transactions at external links (Rakuten, Shopee, etc.)</li>
                            </ul>
                        </li>
                        <li>Information provided in the Service is reference information and is not medical or professional advice.</li>
                    </ol>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">Article 10 (Service Changes, Interruption, Termination)</h3>
                    <ol className="list-decimal pl-6 space-y-2">
                        <li>The operator may change, add, or delete Service content without prior notice to users.</li>
                        <li>
                            The operator may temporarily interrupt the Service in the following cases:
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                                <li>When performing system maintenance or inspection</li>
                                <li>When operation is difficult due to force majeure such as natural disasters</li>
                                <li>Other cases deemed necessary for operation</li>
                            </ul>
                        </li>
                        <li>The operator will notify in advance when possible if terminating the Service.</li>
                    </ol>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">Article 11 (Account Suspension or Deletion)</h3>
                    <p className="mb-4">The operator may suspend or delete accounts without prior notice if users:</p>
                    <ol className="list-decimal pl-6 space-y-2">
                        <li>Violate these Terms</li>
                        <li>Have false information in registration information</li>
                        <li>Have no usage for a long period (more than 6 months)</li>
                        <li>Other cases deemed inappropriate by the operator</li>
                    </ol>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">Article 12 (Account Deletion)</h3>
                    <ol className="list-decimal pl-6 space-y-2">
                        <li>Users can request account deletion through the "Contact" form in the app.</li>
                        <li>Upon account deletion, all registered data (cosmetic information, suggestion history, etc.) will be deleted.</li>
                        <li>Deleted data cannot be restored.</li>
                    </ol>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">Article 13 (Personal Information Handling and Data Processing)</h3>
                    <ol className="list-decimal pl-6 space-y-2">
                        <li>Personal information handling follows the separately specified "Privacy Policy."</li>
                        <li>
                            This Service uses the following third-party services for data processing and service provision:
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                                <li>Google Cloud Platform (Gemini, Imagen, Vision API, etc.): AI processing, image analysis, data storage</li>
                                <li>Firebase: Authentication, database</li>
                                <li>SendGrid: Email sending</li>
                                <li>Stripe: Credit card payment</li>
                            </ul>
                            <p className="mt-2">Users agree that data will be processed by these third-party services in using the Service.</p>
                        </li>
                        <li>
                            Information Collection for Service Improvement: This Service may collect information regarding error logs and usage conditions for stable operation and quality improvement. This information is collected and analyzed through third-party tools (Sentry, etc.) and is used solely for the purpose of investigating issues and improving the service.
                        </li>
                    </ol>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">Article 14 (Terms Changes)</h3>
                    <ol className="list-decimal pl-6 space-y-2">
                        <li>The operator may change these Terms as necessary.</li>
                        <li>If there are important changes, notification will be made through the Service.</li>
                        <li>If you continue using the Service after changes, you are deemed to have agreed to the changes.</li>
                    </ol>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">Article 15 (Governing Law and Jurisdiction)</h3>
                    <ol className="list-decimal pl-6 space-y-2">
                        <li>These Terms are governed by Japanese law.</li>
                        <li>For disputes related to the Service, the court with jurisdiction over the operator's location shall be the exclusive agreed jurisdiction court.</li>
                    </ol>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">Article 16 (Contact)</h3>
                    <p>For questions about these Terms, please contact us through the "Contact" form in the app.</p>
                </div>
            </section>

            <hr className="my-8 border-gray-300" />

            <p className="font-bold">
                Effective Date: January 6, 2026
            </p>
        </div>
    );
};

export default Terms;
