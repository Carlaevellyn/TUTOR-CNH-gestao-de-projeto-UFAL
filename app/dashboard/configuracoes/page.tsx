"use client";
import { useState } from "react";
import {
  BellIcon,
  Languages,
  Clock3,
  CalendarDays,
  Timer,
  Bookmark,
  Lightbulb,
  Volume2,
  TriangleAlert,
} from "lucide-react";
import { SidebarToggleButton } from "../../_components/sidebar-toggle-button";
import { UserPill } from "../../_components/user-pill";

export default function ConfiguracoesPage() {

  const [rememberProgress, setRememberProgress] = useState(true);
  const [showTips, setShowTips] = useState(true);
  const [soundsEnabled, setSoundsEnabled] = useState(true);
  const [confirmExit, setConfirmExit] = useState(true);

  return (
    <section className="flex min-h-full flex-1 flex-col bg-[#F7F8FC] px-6 py-6 lg:px-8">
      {/* Header */}
      <header className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div className="flex items-start gap-4">
          <SidebarToggleButton />

          <div>
            <h1 className="text-4xl font-extrabold text-[#1F5FBF]">
              Configurações
            </h1>

            <p className="mt-1 text-sm text-[#6A7487]">
              Personalize sua experiência no Tutor CNH
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 self-start xl:self-auto">
          <button className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-text-muted shadow-sm">
            <BellIcon />
          </button>
          <UserPill />
        </div>
      </header>

      {/* Tabs */}
      <div className="mt-8 flex items-center gap-8 border-b border-[#D9DEE8]">
        <button className="border-b-2 border-[#2A67D7] pb-3 text-sm font-semibold text-[#2A67D7]">
          Geral
        </button>

        <button className="pb-3 text-sm font-medium text-[#7B8498] transition-colors hover:text-[#2A67D7]">
          Notificações
        </button>

        <button className="pb-3 text-sm font-medium text-[#7B8498] transition-colors hover:text-[#2A67D7]">
          Privacidade
        </button>

        <button className="pb-3 text-sm font-medium text-[#7B8498] transition-colors hover:text-[#2A67D7]">
          Conta
        </button>

        <button className="pb-3 text-sm font-medium text-[#7B8498] transition-colors hover:text-[#2A67D7]">
          Aparência
        </button>
      </div>

      {/* Conteúdo */}
      <div className="mt-6 grid grid-cols-12 gap-6">
        {/* Coluna esquerda */}
        <div className="col-span-8">
          <div className="rounded-[24px] border border-[#DCE2EE] bg-white p-6">
            <h2 className="mb-6 text-lg font-bold text-[#274C9A]">
              Configurações gerais
            </h2>
          <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-[#E4E8F0] pb-4">
          <div className="flex items-start gap-3">
          <Languages className="h-5 w-5 text-[#2A67D7]" />

        <div>
          <h3 className="font-semibold text-[#243B77]">
          Idioma da plataforma
          </h3>

          <p className="text-sm text-[#7B8498]">
          Escolha o idioma que deseja utilizar.
          </p>
        </div>
       </div>

        <select className="w-[220px] rounded-xl border border-[#DCE2EE] bg-white px-4 py-2 text-sm text-[#4B5565]">
        <option>Português (Brasil)</option>
      </select>
      </div>

              <div className="flex items-center justify-between border-b border-[#E4E8F0] pb-4">
              <div className="flex items-start gap-3">
              <Clock3 className="h-5 w-5 text-[#2A67D7]" />

              <div>
                <h3 className="font-semibold text-[#243B77]">
                 Fuso horário
                </h3>

              <p className="text-sm text-[#7B8498]">
                 Defina o fuso horário para exibição correta dos horários.
              </p>
            </div>
          </div>

                <select className="w-[220px] rounded-xl border border-[#DCE2EE] bg-white px-4 py-2 text-sm text-[#4B5565] hover:border-[#2A67D7]">
                  <option>(UTC-03:00) Brasília</option>
                </select>
              </div>

              <div className="flex items-center justify-between border-b border-[#E4E8F0] pb-4">
              <div className="flex items-start gap-3">
              <CalendarDays className="h-5 w-5 text-[#2A67D7]" />

              <div>
                <h3 className="font-semibold text-[#243B77]">
                 Formato de data
                </h3>

              <p className="text-sm text-[#7B8498]">
                 Defina o formato de data para exibição correta.
              </p>
            </div>
          </div>

                <select className="w-[220px] rounded-xl border border-[#DCE2EE] bg-white px-4 py-2 text-sm text-[#4B5565] hover:border-[#2A67D7]">
                  <option>DD/MM/AAAA</option>
                </select>
              </div>

              <div className="flex items-center justify-between border-b border-[#E4E8F0] pb-4">
              <div className="flex items-start gap-3">
              <Timer className="h-5 w-5 text-[#2A67D7]" />

              <div>
                <h3 className="font-semibold text-[#243B77]">
                 Unidade de medida de tempo
                </h3>

              <p className="text-sm text-[#7B8498]">
                 Escolha como o tempo será exibido na plataforma.
              </p>
            </div>
          </div>

                <select className="w-[220px] rounded-xl border border-[#DCE2EE] bg-white px-4 py-2 text-sm text-[#4B5565] hover:border-[#2A67D7]">
                  <option>Horas e minutos</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Coluna direita */}
        <div className="col-span-4">
          <div className="rounded-[24px] border border-[#DCE2EE] bg-white p-6">
            <h2 className="mb-6 text-lg font-bold text-[#274C9A]">
              Resumo das preferências
            </h2>

            <div className="space-y-4 text-sm">
              <div>
                <p className="font-semibold text-[#222222]">Idioma</p>
                <p className="text-[#7B8498]">
                  Português (Brasil)
                </p>
              </div>

              <div>
                <p className="font-semibold text-[#222222]">Fuso horário</p>
                <p className="text-[#7B8498]">
                  (UTC-03:00) Brasília
                </p>
              </div>

              <div>
                <p className="font-semibold text-[#222222]">Notificações</p>
                <p className="text-[#7B8498]">
                  Ativadas
                </p>
              </div>

              <div>
                <p className="font-semibold text-[#222222]">Tema</p>
                <p className="text-[#7B8498]">
                  Claro
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-12 gap-6">
  {/* Preferências */}
  <div className="col-span-8">
    <div className="rounded-[24px] border border-[#DCE2EE] bg-white p-6">
      <h2 className="mb-6 text-lg font-bold text-[#274C9A]">
        Preferências de estudo
      </h2>

      <div className="space-y-5">
        <div className="flex items-center justify-between">
        <div className="flex items-start gap-3">
        <Bookmark className="mt-1 h-5 w-5 text-[#2A67D7]" />

      <div>
      <h3 className="font-semibold text-[#243B77]">
        Lembrar onde parei
      </h3>

      <p className="text-sm text-[#7B8498]">
        Retomar automaticamente o último conteúdo estudado.
      </p>
    </div>
  </div>

      <button
        onClick={() => setRememberProgress(!rememberProgress)}
        className={`relative h-6 w-11 shrink-0 rounded-full transition-all ${
        rememberProgress ? "bg-[#2A67D7]" : "bg-[#D6DBE8]"}`}>
      <span
        className={`absolute top-1 h-4 w-4 rounded-full bg-white transition-all ${
        rememberProgress ? "right-1" : "left-1"}`}/>
    </button>
  </div>

        <div className="flex items-center justify-between">
          <div className="flex items-start gap-3">
          <Lightbulb className="mt-1 h-5 w-5 text-[#2A67D7]" />

        <div>
          <h3 className="font-semibold text-[#243B77]">
           Mostrar dicas rápidas
          </h3>

        <p className="text-sm text-[#7B8498]">
          Exibir dicas durante os estudos e simulados.
        </p>
      </div>
    </div>

          <button
            onClick={() => setShowTips(!showTips)}
            className={`relative h-6 w-11 shrink-0 rounded-full transition-all ${
            showTips ? "bg-[#2A67D7]" : "bg-[#D6DBE8]"}`}>
          <span
          className={`absolute top-1 h-4 w-4 rounded-full bg-white transition-all ${
          showTips ? "right-1" : "left-1"}`}/>
          </button>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-start gap-3">
          <Volume2 className="mt-1 h-5 w-5 text-[#2A67D7]" />

        <div>
          <h3 className="font-semibold text-[#243B77]">
          Sons da plataforma
        </h3>

        <p className="text-sm text-[#7B8498]">
          Ativar efeitos sonoros nas ações da plataforma.
        </p>
      </div>
    </div>
          <button
            onClick={() => setSoundsEnabled(!soundsEnabled)}
            className={`relative h-6 w-11 shrink-0 rounded-full transition-all ${
            soundsEnabled ? "bg-[#2A67D7]" : "bg-[#D6DBE8]"}`}>
          <span
          className={`absolute top-1 h-4 w-4 rounded-full bg-white transition-all ${
          soundsEnabled ? "right-1" : "left-1"}`}/>
          </button>
          
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-start gap-3">
          <TriangleAlert className="mt-1 h-5 w-5 text-[#2A67D7]" />

        <div>
          <h3 className="font-semibold text-[#243B77]">
          Confirmação antes de sair
        </h3>

        <p className="text-sm text-[#7B8498]">
          Exibir alerta ao tentar sair de uma questão.
        </p>
      </div>
    </div>

          <button
            onClick={() => setConfirmExit(!confirmExit)}
             className={`relative h-6 w-11 shrink-0 rounded-full transition-all ${
            confirmExit ? "bg-[#2A67D7]" : "bg-[#D6DBE8]"}`}>
          <span
          className={`absolute top-1 h-4 w-4 rounded-full bg-white transition-all ${
          confirmExit ? "right-1" : "left-1"}`}/>
          </button>
        </div>
      </div>
    </div>
  </div>

  {/* Ações rápidas */}
<div className="col-span-4">
  <div className="rounded-[24px] border border-[#DCE2EE] bg-white p-6">
    <h2 className="mb-6 text-lg font-bold text-[#274C9A]">
      Ações rápidas
    </h2>

    <div className="divide-y divide-[#EDF1F7]">
      <button
        className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-medium text-[#4B5565] transition-all duration-200 hover:bg-[#F3F7FF] hover:text-[#2A67D7] hover:translate-x-1 cursor-pointer"
      >
        <span>Redefinir preferências</span>
        <span>›</span>
      </button>

      <button
        className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-medium text-[#4B5565] transition-all duration-200 hover:bg-[#F3F7FF] hover:text-[#2A67D7] hover:translate-x-1 cursor-pointer"
      >
        <span>Exportar dados</span>
        <span>›</span>
      </button>

      <button
        className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-medium text-[#D85B5B] transition-all duration-200 hover:bg-[#FFF5F5] hover:text-[#C0392B] hover:translate-x-1 cursor-pointer"
      >
        <span>Excluir conta</span>
        <span>›</span>
      </button>

      <button
        className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-medium text-[#4B5565] transition-all duration-200 hover:bg-[#F3F7FF] hover:text-[#2A67D7] hover:translate-x-1 cursor-pointer"
      >
        <span>Central de ajuda</span>
        <span>›</span>
      </button>
    </div>
  </div>
</div>
</div>
    </section>
  );
}
