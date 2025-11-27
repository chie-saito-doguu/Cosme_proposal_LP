import React from 'react';

const Terms = () => {
    return (
        <div className="max-w-4xl mx-auto p-6 bg-white text-gray-800 font-sans">
            <h1 className="text-3xl font-bold mb-4">利用規約 / Terms of Service</h1>

            <p className="font-bold mb-8">
                最終更新日: 2025年11月27日
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
                    <p className="mb-4">本サービスには、以下の利用制限があります:</p>
                    <ol className="list-decimal pl-6 space-y-2">
                        <li><strong> メイク提案 </strong>: 1日3回まで</li>
                        <li><strong> コスメ登録 </strong>: 月3回まで</li>
                    </ol>
                    <p className="mt-4">これらの制限は、サービスの公平な利用と品質維持のために設けられています。</p>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">第5条(禁止事項)</h3>
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
                    <h3 className="text-xl font-bold mb-4">第6条(知的財産権)</h3>
                    <ol className="list-decimal pl-6 space-y-2">
                        <li>本サービスに関する知的財産権は、運営者または正当な権利者に帰属します。</li>
                        <li>ユーザーが登録したコスメ画像の著作権は、ユーザーに帰属します。</li>
                        <li>ユーザーは、登録した画像について、本サービスの提供に必要な範囲で運営者に利用を許諾するものとします。</li>
                        <li>AIが生成したメイク提案画像の著作権は、運営者に帰属します。ただし、ユーザーは個人的な利用の範囲で自由に使用できます。</li>
                    </ol>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">第7条(ユーザーの責任)</h3>
                    <ol className="list-decimal pl-6 space-y-2">
                        <li>ユーザーは、自己の責任において本サービスを利用するものとします。</li>
                        <li>ユーザーは、登録した画像が第三者の権利を侵害しないことを保証します。</li>
                        <li>ユーザーの行為により運営者または第三者に損害が生じた場合、ユーザーは一切の責任を負うものとします。</li>
                    </ol>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">第8条(免責事項)</h3>
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
                    <h3 className="text-xl font-bold mb-4">第9条(サービスの変更・中断・終了)</h3>
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
                    <h3 className="text-xl font-bold mb-4">第10条(アカウントの停止・削除)</h3>
                    <p className="mb-4">運営者は、ユーザーが以下に該当する場合、事前通知なくアカウントを停止または削除できます:</p>
                    <ol className="list-decimal pl-6 space-y-2">
                        <li>本規約に違反した場合</li>
                        <li>登録情報に虚偽があった場合</li>
                        <li>長期間(6ヶ月以上)利用がない場合</li>
                        <li>その他、運営者が不適切と判断した場合</li>
                    </ol>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">第11条(退会)</h3>
                    <ol className="list-decimal pl-6 space-y-2">
                        <li>ユーザーは、アプリ内の「お問い合わせ」フォームから退会を申請できます。</li>
                        <li>退会により、登録されたすべてのデータ(コスメ情報、提案履歴等)が削除されます。</li>
                        <li>削除されたデータは復元できません。</li>
                    </ol>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">第12条(個人情報の取扱いとデータ処理)</h3>
                    <ol className="list-decimal pl-6 space-y-2">
                        <li>個人情報の取扱いについては、別途定める「プライバシーポリシー」に従います。</li>
                        <li>
                            本サービスは、データ処理およびサービス提供のために以下の第三者サービスを利用します：
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                                <li>Google Cloud Platform(Gemini, Imagen, Vision API等): AI処理、画像解析、データ保存</li>
                                <li>Firebase: 認証、データベース</li>
                                <li>SendGrid: メール送信</li>
                            </ul>
                            <p className="mt-2">ユーザーは、本サービスの利用において、これらの第三者サービスによってデータが処理されることに同意するものとします。</p>
                        </li>
                    </ol>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">第13条(規約の変更)</h3>
                    <ol className="list-decimal pl-6 space-y-2">
                        <li>運営者は、必要に応じて本規約を変更できます。</li>
                        <li>重要な変更がある場合は、サービス内で通知します。</li>
                        <li>変更後も本サービスを継続利用した場合、変更に同意したものとみなされます。</li>
                    </ol>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">第14条(準拠法・管轄裁判所)</h3>
                    <ol className="list-decimal pl-6 space-y-2">
                        <li>本規約は、日本法に準拠します。</li>
                        <li>本サービスに関する紛争については、運営者の所在地を管轄する裁判所を専属的合意管轄裁判所とします。</li>
                    </ol>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">第15条(お問い合わせ)</h3>
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
                    <p className="mb-4">Layanan memiliki batasan penggunaan berikut:</p>
                    <ol className="list-decimal pl-6 space-y-2">
                        <li><strong> Saran Makeup </strong>: Hingga 3 kali per hari</li>
                        <li><strong> Pendaftaran Kosmetik </strong>: Hingga 3 kali per bulan</li>
                    </ol>
                    <p className="mt-4">Batasan ini ditetapkan untuk penggunaan layanan yang adil dan pemeliharaan kualitas.</p>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">Pasal 5(Tindakan yang Dilarang)</h3>
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
                    <h3 className="text-xl font-bold mb-4">Pasal 6(Hak Kekayaan Intelektual)</h3>
                    <ol className="list-decimal pl-6 space-y-2">
                        <li>Hak kekayaan intelektual terkait Layanan adalah milik operator atau pemegang hak yang sah.</li>
                        <li>Hak cipta gambar kosmetik yang didaftarkan oleh pengguna adalah milik pengguna.</li>
                        <li>Pengguna memberikan izin kepada operator untuk menggunakan gambar yang didaftarkan dalam ruang lingkup yang diperlukan untuk penyediaan Layanan.</li>
                        <li>Hak cipta gambar saran makeup yang dihasilkan oleh AI adalah milik operator.Namun, pengguna dapat menggunakannya secara bebas untuk penggunaan pribadi.</li>
                    </ol>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">Pasal 7(Tanggung Jawab Pengguna)</h3>
                    <ol className="list-decimal pl-6 space-y-2">
                        <li>Pengguna menggunakan Layanan atas tanggung jawab sendiri.</li>
                        <li>Pengguna menjamin bahwa gambar yang didaftarkan tidak melanggar hak pihak ketiga.</li>
                        <li>Jika tindakan pengguna menyebabkan kerusakan pada operator atau pihak ketiga, pengguna bertanggung jawab penuh.</li>
                    </ol>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">Pasal 8(Penafian)</h3>
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
                    <h3 className="text-xl font-bold mb-4">Pasal 9(Perubahan, Gangguan, Penghentian Layanan)</h3>
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
                    <h3 className="text-xl font-bold mb-4">Pasal 10(Penangguhan atau Penghapusan Akun)</h3>
                    <p className="mb-4">Operator dapat menangguhkan atau menghapus akun tanpa pemberitahuan sebelumnya jika pengguna:</p>
                    <ol className="list-decimal pl-6 space-y-2">
                        <li>Melanggar ketentuan ini</li>
                        <li>Ada informasi palsu dalam informasi pendaftaran</li>
                        <li>Tidak ada penggunaan untuk waktu yang lama(lebih dari 6 bulan)</li>
                        <li>Kasus lain yang dianggap tidak pantas oleh operator</li>
                    </ol>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">Pasal 11(Penghapusan Akun)</h3>
                    <ol className="list-decimal pl-6 space-y-2">
                        <li>Pengguna dapat mengajukan penghapusan akun melalui formulir "Hubungi Kami" di dalam aplikasi.</li>
                        <li>Dengan penghapusan akun, semua data yang terdaftar(informasi kosmetik, riwayat saran, dll.) akan dihapus.</li>
                        <li>Data yang dihapus tidak dapat dipulihkan.</li>
                    </ol>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">Pasal 12(Penanganan Informasi Pribadi dan Pemrosesan Data)</h3>
                    <ol className="list-decimal pl-6 space-y-2">
                        <li>Penanganan informasi pribadi mengikuti "Kebijakan Privasi" yang ditetapkan secara terpisah.</li>
                        <li>
                            Layanan ini menggunakan layanan pihak ketiga berikut untuk pemrosesan data dan penyediaan layanan:
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                                <li>Google Cloud Platform(Gemini, Imagen, Vision API, dll.): Pemrosesan AI, analisis gambar, penyimpanan data</li>
                                <li>Firebase: Autentikasi, basis data</li>
                                <li>SendGrid: Pengiriman email</li>
                            </ul>
                            <p className="mt-2">Pengguna setuju bahwa data akan diproses oleh layanan pihak ketiga ini dalam penggunaan Layanan.</p>
                        </li>
                    </ol>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">Pasal 13(Perubahan Ketentuan)</h3>
                    <ol className="list-decimal pl-6 space-y-2">
                        <li>Operator dapat mengubah ketentuan ini sesuai kebutuhan.</li>
                        <li>Jika ada perubahan penting, akan diberitahukan melalui Layanan.</li>
                        <li>Jika Anda terus menggunakan Layanan setelah perubahan, Anda dianggap telah menyetujui perubahan tersebut.</li>
                    </ol>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">Pasal 14(Hukum yang Berlaku dan Yurisdiksi)</h3>
                    <ol className="list-decimal pl-6 space-y-2">
                        <li>Ketentuan ini diatur oleh hukum Jepang.</li>
                        <li>Untuk sengketa terkait Layanan, pengadilan yang memiliki yurisdiksi atas lokasi operator akan menjadi pengadilan yurisdiksi eksklusif yang disepakati.</li>
                    </ol>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">Pasal 15(Kontak)</h3>
                    <p>Untuk pertanyaan tentang ketentuan ini, silakan hubungi kami melalui formulir "Hubungi Kami" di dalam aplikasi.</p>
                </div>
            </section>

            <hr className="my-8 border-gray-300" />

            <p className="font-bold">
                Effective Date: November 27, 2025
            </p>
        </div>
    );
};

export default Terms;
