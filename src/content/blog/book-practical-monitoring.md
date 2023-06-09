---
title: 読書 - 入門 監視
author: kadoppe
pubDatetime: 2022-07-17T15:00:00.000Z
description: これからしっかり監視の仕組みを作っていくぞー、というフェーズのプロダクトに携わることになったので、体系的に知識をインプット / 復習の目的で読んでみました。
postSlug: book-practical-monitoring
tags:
  - engineering
  - book
---

これからしっかり監視の仕組みを作っていくぞー、というフェーズのプロダクトに携わることになったので、体系的に知識をインプット / 復習の目的で読んでみました。

[入門 監視](https://www.amazon.co.jp/dp/4873118646?tag=creativestylekadoppe-22&linkCode=ogi&th=1&psc=1)

内容量はそこまで多くないので、サクッと短時間で読めました。気づいたことや学んだことをざっくりメモ。

## 監視 SaaS を積極的に使おう

監視のための仕組みを自前で作るのではなく、昨今充実している監視のための SaaS を使用するところから始めましょう。その方が、結果的にコストパフォーマンスがよくなるので、監視 SaaS を使うために必要になる多少の出費は許容しましょう。

自分がこれまで使ったことがある監視 SaaS は以下のような感じ。

- [Datadog](https://www.datadoghq.com/ja/)
- [New Relic](https://newrelic.com/jp)
- [Sentry](https://sentry.io/)
- [Bugsnag](https://www.bugsnag.com/)
- [PagerDuty](https://ja.pagerduty.com/)
- GCP / AWS が提供する各種監視サービス
- など

これ以外にも様々な SaaS が存在するので、自分たちが監視によって達成したい目的に応じて、一つ、もしくは複数の SaaS を組み合わせて利用するのがよさそうです。

自前で仕組みをつくるコスト（＝工数）が減らせる以外にもメリットはあります。

例えば、各種 SaaS は監視の専門家（であるべき）なので、専門家ではない僕でも SaaS を使うだけで専門家の知識やベストプラクティスを活用しながら、プロダクト開発に向き合う事ができます。

プロダクト開発に関わるメンバーの認知負荷を下げることも重要です。自前で監視の仕組みを作ってしまうと、メンバーの集中力やエネルギーが、無意識のうちに少なからずそちらのほうに流れていってしまいます。そのエネルギーは外部（監視 SaaS）にまかせてしまうことで、できるだけたくさんの集中力やエネルギーを、プロダクト開発の本質的な部分に使えるようになるはず。特にリソースが限られているスタートアップ企業では、重要だと思います。

## ビジネスやユーザーの体験と監視を紐付ける

ビジネス上の状態目標 / KPI を達成したり、プロダクトによって素晴らしい体験・価値をユーザーに提供し続けることが、プロダクトを世の中に出す目的であるはず。であれば、プロダクトを継続的に意味のある形で動かし続けるための仕組みである監視も、その目的にちゃんと紐付けておきたいです。

プロダクトそのものや、それを実現するためのシステムからボトムアップ的に監視を組むのではなく、ビジネス上の状態目標 / KPI やユーザーの体験といった「プロダクトによるアウトカム」から監視の仕組みを組むのがとても重要だと学びました。

- 売上やコンバージョンレートに直接影響するメトリクスはなにか
- ユーザーの体験（＝幸せ度）に直接影響するメトリクスはなにか

（「幸せ度」については SLI (Service Level Indicators) / SLO (Service Level Objectives) を決める際にも重要な観点だとどこかで学びました。幸せ度という言葉は自分の適当訳で、Happiness という言葉で表現されていたかもｗ）

を特定して、そこに対して重点的に監視やアラートを仕込むことが大事です。あらゆるメトリクスにアラートを仕込むことは、エンジニアの認知負荷が上がりすぎてしまい難しいので、集中と選択が必要。

ビジネスやユーザーの体験に紐づくメトリクスを普段は可視化しておいて、それらに何かしらの異常が発生したときに気付けるようにアラートを仕込んでおき、異常の原因を調査するためにプロダクトに関する他のメトリクスも含めて利用していく、というイメージで監視の仕組みを組んでいくのがよさそうです。

以上が、本書を読んだあとに自分の頭に強めに残っていた学び・気づきでした。

他にも監視にまつわる様々なことが、ビジネス・システム・それを支える人面など幅広い観点でまとめられていました。必要に応じてこれからもリファレンス的に使っていこうと思えた書籍です。

おしまい。
