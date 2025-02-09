//
// Created by Marc Rousavy on 25.06.21.
//

#include "JHashMap.h"

#include <jni.h>
#include <fbjni/fbjni.h>


namespace facebook {
namespace jni {

template <typename K, typename V>
local_ref<JHashMap<K, V>> JHashMap<K, V>::create() {
  return JHashMap<K, V>::newInstance();
}

} // namespace jni
} // namespace facebook
