(function() {var implementors = {};
implementors["bp_header_chain"] = [{"text":"impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.130/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"bp_header_chain/struct.AuthoritySet.html\" title=\"struct bp_header_chain::AuthoritySet\">AuthoritySet</a>","synthetic":false,"types":["bp_header_chain::AuthoritySet"]},{"text":"impl&lt;'de, H:&nbsp;HeaderT&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.130/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"bp_header_chain/struct.InitializationData.html\" title=\"struct bp_header_chain::InitializationData\">InitializationData</a>&lt;H&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;H: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.130/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt;,&nbsp;</span>","synthetic":false,"types":["bp_header_chain::InitializationData"]}];
implementors["bp_messages"] = [{"text":"impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.130/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"enum\" href=\"bp_messages/enum.OperatingMode.html\" title=\"enum bp_messages::OperatingMode\">OperatingMode</a>","synthetic":false,"types":["bp_messages::OperatingMode"]}];
implementors["kusama_runtime"] = [{"text":"impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.130/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"kusama_runtime/struct.SessionKeys.html\" title=\"struct kusama_runtime::SessionKeys\">SessionKeys</a>","synthetic":false,"types":["kusama_runtime::SessionKeys"]},{"text":"impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.130/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"kusama_runtime/struct.GenesisConfig.html\" title=\"struct kusama_runtime::GenesisConfig\">GenesisConfig</a>","synthetic":false,"types":["kusama_runtime::GenesisConfig"]}];
implementors["pallet_bridge_grandpa"] = [{"text":"impl&lt;'de, T:&nbsp;<a class=\"trait\" href=\"pallet_bridge_grandpa/pallet/trait.Config.html\" title=\"trait pallet_bridge_grandpa::pallet::Config\">Config</a>&lt;I&gt;, I:&nbsp;'static&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.130/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"pallet_bridge_grandpa/pallet/struct.GenesisConfig.html\" title=\"struct pallet_bridge_grandpa::pallet::GenesisConfig\">GenesisConfig</a>&lt;T, I&gt;","synthetic":false,"types":["pallet_bridge_grandpa::pallet::GenesisConfig"]}];
implementors["pallet_bridge_messages"] = [{"text":"impl&lt;'de, T:&nbsp;<a class=\"trait\" href=\"pallet_bridge_messages/trait.Config.html\" title=\"trait pallet_bridge_messages::Config\">Config</a>&lt;I&gt;, I:&nbsp;Instance&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.130/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"pallet_bridge_messages/struct.GenesisConfig.html\" title=\"struct pallet_bridge_messages::GenesisConfig\">GenesisConfig</a>&lt;T, I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"enum\" href=\"bp_messages/enum.OperatingMode.html\" title=\"enum bp_messages::OperatingMode\">OperatingMode</a>: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.130/serde/de/trait.DeserializeOwned.html\" title=\"trait serde::de::DeserializeOwned\">DeserializeOwned</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/marker/struct.PhantomData.html\" title=\"struct core::marker::PhantomData\">PhantomData</a>&lt;I&gt;: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.130/serde/de/trait.DeserializeOwned.html\" title=\"trait serde::de::DeserializeOwned\">DeserializeOwned</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;T::AccountId&gt;: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.130/serde/de/trait.DeserializeOwned.html\" title=\"trait serde::de::DeserializeOwned\">DeserializeOwned</a>,&nbsp;</span>","synthetic":false,"types":["pallet_bridge_messages::GenesisConfig"]}];
implementors["polkadot_node_primitives"] = [{"text":"impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.130/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"polkadot_node_primitives/struct.Proof.html\" title=\"struct polkadot_node_primitives::Proof\">Proof</a>","synthetic":false,"types":["polkadot_node_primitives::Proof"]},{"text":"impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.130/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"polkadot_node_primitives/struct.ErasureChunk.html\" title=\"struct polkadot_node_primitives::ErasureChunk\">ErasureChunk</a>","synthetic":false,"types":["polkadot_node_primitives::ErasureChunk"]}];
implementors["polkadot_parachain"] = [{"text":"impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.130/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"polkadot_parachain/primitives/struct.HeadData.html\" title=\"struct polkadot_parachain::primitives::HeadData\">HeadData</a>","synthetic":false,"types":["polkadot_parachain::primitives::HeadData"]},{"text":"impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.130/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"polkadot_parachain/primitives/struct.ValidationCode.html\" title=\"struct polkadot_parachain::primitives::ValidationCode\">ValidationCode</a>","synthetic":false,"types":["polkadot_parachain::primitives::ValidationCode"]},{"text":"impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.130/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"polkadot_parachain/primitives/struct.BlockData.html\" title=\"struct polkadot_parachain::primitives::BlockData\">BlockData</a>","synthetic":false,"types":["polkadot_parachain::primitives::BlockData"]},{"text":"impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.130/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"polkadot_parachain/primitives/struct.Id.html\" title=\"struct polkadot_parachain::primitives::Id\">Id</a>","synthetic":false,"types":["polkadot_parachain::primitives::Id"]}];
implementors["polkadot_primitives"] = [{"text":"impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.130/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"polkadot_primitives/v0/struct.ValidatorIndex.html\" title=\"struct polkadot_primitives::v0::ValidatorIndex\">ValidatorIndex</a>","synthetic":false,"types":["polkadot_primitives::v0::ValidatorIndex"]},{"text":"impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.130/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"polkadot_primitives/v0/struct.FeeSchedule.html\" title=\"struct polkadot_primitives::v0::FeeSchedule\">FeeSchedule</a>","synthetic":false,"types":["polkadot_primitives::v0::FeeSchedule"]}];
implementors["polkadot_runtime"] = [{"text":"impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.130/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"polkadot_runtime/struct.SessionKeys.html\" title=\"struct polkadot_runtime::SessionKeys\">SessionKeys</a>","synthetic":false,"types":["polkadot_runtime::SessionKeys"]},{"text":"impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.130/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"polkadot_runtime/struct.GenesisConfig.html\" title=\"struct polkadot_runtime::GenesisConfig\">GenesisConfig</a>","synthetic":false,"types":["polkadot_runtime::GenesisConfig"]}];
implementors["polkadot_runtime_common"] = [{"text":"impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.130/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"enum\" href=\"polkadot_runtime_common/claims/enum.StatementKind.html\" title=\"enum polkadot_runtime_common::claims::StatementKind\">StatementKind</a>","synthetic":false,"types":["polkadot_runtime_common::claims::StatementKind"]},{"text":"impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.130/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"polkadot_runtime_common/claims/struct.EthereumAddress.html\" title=\"struct polkadot_runtime_common::claims::EthereumAddress\">EthereumAddress</a>","synthetic":false,"types":["polkadot_runtime_common::claims::EthereumAddress"]},{"text":"impl&lt;'de, T:&nbsp;<a class=\"trait\" href=\"polkadot_runtime_common/claims/pallet/trait.Config.html\" title=\"trait polkadot_runtime_common::claims::pallet::Config\">Config</a>&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.130/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"polkadot_runtime_common/claims/pallet/struct.GenesisConfig.html\" title=\"struct polkadot_runtime_common::claims::pallet::GenesisConfig\">GenesisConfig</a>&lt;T&gt;","synthetic":false,"types":["polkadot_runtime_common::claims::pallet::GenesisConfig"]}];
implementors["polkadot_runtime_parachains"] = [{"text":"impl&lt;'de, BlockNumber&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.130/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"polkadot_runtime_parachains/configuration/struct.HostConfiguration.html\" title=\"struct polkadot_runtime_parachains::configuration::HostConfiguration\">HostConfiguration</a>&lt;BlockNumber&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;BlockNumber: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.130/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt;,&nbsp;</span>","synthetic":false,"types":["polkadot_runtime_parachains::configuration::HostConfiguration"]},{"text":"impl&lt;'de, T:&nbsp;<a class=\"trait\" href=\"polkadot_runtime_parachains/configuration/pallet/trait.Config.html\" title=\"trait polkadot_runtime_parachains::configuration::pallet::Config\">Config</a>&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.130/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"polkadot_runtime_parachains/configuration/pallet/struct.GenesisConfig.html\" title=\"struct polkadot_runtime_parachains::configuration::pallet::GenesisConfig\">GenesisConfig</a>&lt;T&gt;","synthetic":false,"types":["polkadot_runtime_parachains::configuration::pallet::GenesisConfig"]},{"text":"impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.130/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"polkadot_runtime_parachains/hrmp/pallet/struct.GenesisConfig.html\" title=\"struct polkadot_runtime_parachains::hrmp::pallet::GenesisConfig\">GenesisConfig</a>","synthetic":false,"types":["polkadot_runtime_parachains::hrmp::pallet::GenesisConfig"]},{"text":"impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.130/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"polkadot_runtime_parachains/paras/struct.ParaGenesisArgs.html\" title=\"struct polkadot_runtime_parachains::paras::ParaGenesisArgs\">ParaGenesisArgs</a>","synthetic":false,"types":["polkadot_runtime_parachains::paras::ParaGenesisArgs"]},{"text":"impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.130/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"polkadot_runtime_parachains/paras/pallet/struct.GenesisConfig.html\" title=\"struct polkadot_runtime_parachains::paras::pallet::GenesisConfig\">GenesisConfig</a>","synthetic":false,"types":["polkadot_runtime_parachains::paras::pallet::GenesisConfig"]}];
implementors["polkadot_service"] = [{"text":"impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.130/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"polkadot_service/chain_spec/struct.Extensions.html\" title=\"struct polkadot_service::chain_spec::Extensions\">Extensions</a>","synthetic":false,"types":["polkadot_service::chain_spec::Extensions"]},{"text":"impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.130/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"polkadot_service/chain_spec/struct.RococoGenesisExt.html\" title=\"struct polkadot_service::chain_spec::RococoGenesisExt\">RococoGenesisExt</a>","synthetic":false,"types":["polkadot_service::chain_spec::RococoGenesisExt"]}];
implementors["polkadot_test_runtime"] = [{"text":"impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.130/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"polkadot_test_runtime/struct.SessionKeys.html\" title=\"struct polkadot_test_runtime::SessionKeys\">SessionKeys</a>","synthetic":false,"types":["polkadot_test_runtime::SessionKeys"]},{"text":"impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.130/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"polkadot_test_runtime/struct.GenesisConfig.html\" title=\"struct polkadot_test_runtime::GenesisConfig\">GenesisConfig</a>","synthetic":false,"types":["polkadot_test_runtime::GenesisConfig"]}];
implementors["rococo_runtime"] = [{"text":"impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.130/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"rococo_runtime/struct.SessionKeys.html\" title=\"struct rococo_runtime::SessionKeys\">SessionKeys</a>","synthetic":false,"types":["rococo_runtime::SessionKeys"]},{"text":"impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.130/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"rococo_runtime/struct.GenesisConfig.html\" title=\"struct rococo_runtime::GenesisConfig\">GenesisConfig</a>","synthetic":false,"types":["rococo_runtime::GenesisConfig"]}];
implementors["westend_runtime"] = [{"text":"impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.130/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"westend_runtime/struct.SessionKeys.html\" title=\"struct westend_runtime::SessionKeys\">SessionKeys</a>","synthetic":false,"types":["westend_runtime::SessionKeys"]},{"text":"impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.130/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"westend_runtime/struct.GenesisConfig.html\" title=\"struct westend_runtime::GenesisConfig\">GenesisConfig</a>","synthetic":false,"types":["westend_runtime::GenesisConfig"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()